const { v4: uuidv4 } = require("uuid");
const withAsync = require("../helper/with-async");
const httpStatus = require("http-status");
const cloudinary = require("../config/cloudinary");
const { Sequelize, sequelize } = require("../models/index");
const { Post, User, Image } = require("../models/index");
const responseHandler = require("../helper/response-handler");

const FOLDER = "social-media";

const getAll = withAsync(async (req, res) => {
  const { uuid: userId } = req.user;
  const { cursor, limit = 10 } = req.query;

  const cursorDate = cursor ? new Date(cursor) : null;

  const where = cursorDate
    ? {
        createdAt: {
          [Sequelize.Op.lt]: cursorDate,
        },
      }
    : {};

  let posts = await Post.findAll({
    where,
    attributes: {
      include: [
        [
          Sequelize.literal(
            "(SELECT COUNT(*) FROM likes WHERE likes.post_id = Post.id)"
          ),
          "likeCount",
        ],
        [
          Sequelize.literal(
            "(SELECT COUNT(*) FROM comments WHERE comments.post_id = Post.id)"
          ),
          "commentCount",
        ],
        [
          Sequelize.literal(
            `(
              SELECT COUNT(*) 
              FROM likes 
              WHERE likes.post_id = Post.id 
              AND likes.user_id = '${userId}'
            )`
          ),
          "isLiked",
        ],
      ],
    },
    include: [
      { model: User, as: "author", attributes: { exclude: ["password"] } },
      {
        model: Image,
        as: "images",
        attributes: ["url", "uuid"],
      },
    ],
    order: [["createdAt", "DESC"]],
    limit: parseInt(limit),
  });

  posts = posts.map((post) => serializePost(post));

  const nextCursor =
    posts.length === parseInt(limit) ? posts[posts.length - 1].createdAt : null;

  return res.status(httpStatus.OK).json(
    responseHandler.returnSuccess("Posts retrieved successfully", {
      posts,
      nextCursor,
    })
  );
});

const getById = withAsync(async (req, res) => {
  const { postId } = req.params;

  const post = await Post.findByPk(postId, {
    attributes: {
      include: [
        [
          Sequelize.literal(
            "(SELECT COUNT(*) FROM likes WHERE likes.post_id = Post.id)"
          ),
          "likeCount",
        ],
        [
          Sequelize.literal(
            "(SELECT COUNT(*) FROM comments WHERE comments.post_id = Post.id)"
          ),
          "commentCount",
        ],
      ],
    },
    include: [
      { model: User, as: "author", attributes: { exclude: ["password"] } },
      {
        model: Image,
        as: "images",
        attributes: ["url", "uuid"],
      },
    ],
  });

  if (!post) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json(responseHandler.returnError("Post not found"));
  }

  return res
    .status(httpStatus.OK)
    .json(
      responseHandler.returnSuccess(
        "Post retrieved successfully",
        serializePost(post)
      )
    );
});

const deletePost = withAsync(async (req, res) => {
  const { uuid: userId } = req.user;
  const { postId } = req.params;

  const post = await Post.findOne(
    {
      where: { id: postId },
      include: [{ model: User, as: "author" }],
    },
    { raw: true }
  );

  if (!post) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json(responseHandler.returnError("Post not found"));
  }

  if (post.author.uuid !== userId) {
    return res
      .status(httpStatus.FORBIDDEN)
      .json(responseHandler.returnError("Unauthorized to delete this post"));
  }

  const publicId = await Image.findAll({
    attributes: ["publicId"],
    where: { postId },
  });

  const promises = publicId.map((image) =>
    cloudinary.uploader.destroy(image.publicId)
  );

  await Promise.all(promises);

  await post.destroy();

  return res
    .status(httpStatus.OK)
    .json(responseHandler.returnSuccess("Post deleted successfully"));
});

const create = async (req, res) => {
  let transaction;
  try {
    const { description } = req.body;
    const { uuid: userId } = req.user;

    transaction = await sequelize.transaction();

    let post = await Post.create(
      {
        description,
        userId,
      },
      { transaction }
    );

    post = post.toJSON();

    const files = req.files || [];
    let images = [];

    if (files.length > 0) {
      const uploadPromises = files.map((file) =>
        cloudinary.uploader.upload(file.path, {
          folder: FOLDER,
          format: "webp",
          transformation: {
            height: 400,
            width: 800,
            quality: "auto",
            fetch_format: "auto",
            crop: "fill",
            gravity: "auto",
          },
        })
      );

      const uploadedImages = await Promise.all(uploadPromises);

      images = uploadedImages.map((image) => ({
        uuid: uuidv4(),
        postId: post.id,
        url: image.secure_url,
        publicId: image.public_id,
      }));

      await Image.bulkCreate(images, { transaction });
    }

    await transaction.commit();

    const response = {
      message: "Post created successfully",
      data: {
        post,
        images: images.map((image) => image.url),
      },
      success: true,
    };

    return res.status(httpStatus.CREATED).json(response);
  } catch (error) {
    console.error("Error >>>>>>>>>>>>", error);

    if (transaction) await transaction.rollback();

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message || "Something went wrong",
      success: false,
    });
  }
};

const serializePost = (_post) => {
  const post = _post.toJSON();
  post.likeCount = Number(post.likeCount) || 0;
  post.commentCount = Number(post.commentCount) || 0;
  post.isLiked = post.isLiked > 0;
  return post;
};

module.exports = { create, getAll, getById, deletePost };
