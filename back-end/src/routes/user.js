const express = require("express");
const authentication = require("../middlewares/authentication");
const userController = require("../controllers/user");
const userValidator = require("../validators/user");
const relationshipController = require("../controllers/relationship");
const upload = require("../middlewares/multer");

const router = express.Router();

router.get("/me", authentication, userController.getMe);

router.get("/non-following", authentication, userController.getNonFollowing);

router.get("/following", authentication, userController.getFollowing);

router.get("/followers", authentication, userController.getFollowers);

router.post(
  "/:followingId/toggle-follow",
  authentication,
  relationshipController.toggleFollow
);

router.get("/:userId", authentication, userController.getUser);

router.get("/:userId/images", authentication, userController.getUserImages);

router.get("/:userId/posts", authentication, userController.getUserPosts);

router.get("/:userId/following", authentication, userController.getFollowing);

router.put(
  "/me",
  authentication,
  userValidator.updateUserValidator,
  userController.updateMe
);

router.put(
  "/me/images",
  authentication,
  upload.fields([
    { name: "coverPicture", maxCount: 1 },
    { name: "profilePicture", maxCount: 1 },
  ]),
  userController.updateImages
);

module.exports = router;
