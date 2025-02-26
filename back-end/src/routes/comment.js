const express = require("express");
const commentController = require("../controllers/comment");
const commentValidator = require("../validators/comment");
const authentication = require("../middlewares/authentication");

const router = express.Router();

router.post(
  "/",
  authentication,
  commentValidator.create,
  commentController.create
);

module.exports = router;
