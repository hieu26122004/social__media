const express = require("express");
const postController = require("../controllers/post");
const postValidator = require("../validators/post");
const commentController = require("../controllers/comment");
const likeController = require("../controllers/like");
const authentication = require("../middlewares/authentication");
const upload = require("../middlewares/multer");

const router = express.Router();

router.post(
  "/",
  authentication,
  upload.array("images", 5),
  postValidator.createValidator,
  postController.create
);

router.get("/", authentication, postController.getAll);

router.get("/:postId", authentication, postController.getById);

router.delete("/:postId", authentication, postController.deletePost);

router.get("/:postId/comments", authentication, commentController.getByPost);

router.post("/:postId/toggle-like", authentication, likeController.toggleLike);

module.exports = router;
