const withAsync = require("../helper/with-async");
const httpStatus = require("http-status");
const { v4: uuidv4 } = require("uuid");
const { Like, Post } = require("../models/index");

const toggleLike = withAsync(async (req, res, next) => {
  const { uuid } = req.user;
  const { postId } = req.params;

  const post = await Post.findByPk(postId);

  if (!post) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: "Post not found",
      success: false,
    });
  }

  const like = await Like.findOne({
    where: { userId: uuid, postId },
  });

  if (like) {
    await like.destroy();
    return res.status(httpStatus.OK).json({
      message: "You have unliked the post",
      success: true,
      liked: false,
    });
  } else {
    await Like.create({
      uuid: uuidv4(),
      userId: uuid,
      postId,
    });

    return res.status(httpStatus.OK).json({
      message: "You have liked the post",
      success: true,
      liked: true,
    });
  }
});
module.exports = { toggleLike };
