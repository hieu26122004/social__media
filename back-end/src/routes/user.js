const express = require("express");
const authentication = require("../middlewares/authentication");
const userController = require("../controllers/user");
const relationshipController = require("../controllers/relationship");

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

module.exports = router;
