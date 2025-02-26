const withAsync = require("../helper/with-async");
const responseHandler = require("../helper/response-handler");
const httpStatus = require("http-status");
const { v4: uuidv4 } = require("uuid");
const { Comment, Post, User } = require("../models/index");

const create = withAsync(async (req, res) => {
  const { content, postId } = req.body;
  const user = req.user;

  const post = await Post.findByPk(postId);

  if (!post) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json(responseHandler.returnError("Post not found"));
  }

  let comment = await Comment.create({
    uuid: uuidv4(),
    content,
    userId: user.uuid,
    postId,
  });

  comment = comment.toJSON();

  comment.author = user;

  return res
    .status(httpStatus.CREATED)
    .json(
      responseHandler.returnSuccess("Comment created successfully", comment)
    );
});

const getByPost = withAsync(async (req, res) => {
  const { postId } = req.params;

  const post = await Post.findByPk(postId);

  if (!post) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json(responseHandler.returnError("Post not found"));
  }

  const comments = await Comment.findAll({
    where: { postId },
    include: [
      { model: User, as: "author", attributes: { exclude: ["password"] } },
    ],
    order: [["createdAt", "DESC"]],
  });

  return res
    .status(httpStatus.OK)
    .json(
      responseHandler.returnSuccess("Comments retrieved successfully", comments)
    );
});

module.exports = {
  create,
  getByPost,
};
