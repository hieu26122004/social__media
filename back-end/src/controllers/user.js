const withAsync = require("../helper/with-async");
const httpStatus = require("http-status");
const { v4: uuidv4 } = require("uuid");
const responseHandler = require("../helper/response-handler");
const cloudinary = require("../config/cloudinary");
const {
  User,
  Relationship,
  Profile,
  Image,
  Post,
  Sequelize,
} = require("../models/index");

const FOLDER = "social-media";

const getMe = withAsync(async (req, res, next) => {
  if (!req.user) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .json(
        responseHandler.returnError("User not authenticated or not found!")
      );
  }

  const user = await User.findByPk(req.user.uuid, {
    include: [{ model: Profile, as: "profile" }],
    attributes: {
      exclude: ["password"],
    },
  });

  return res
    .status(httpStatus.OK)
    .json(responseHandler.returnSuccess("User retrieved successfully", user));
});

const getFollowing = withAsync(async (req, res, next) => {
  const userId = req.params.userId || req.user.uuid;

  const following = await Relationship.findAll({
    where: { followerId: userId },
    attributes: ["followingId"],
    raw: true,
  });

  const followingIds = following.map((rel) => rel.followingId);

  const followingData = await User.findAll({
    where: {
      uuid: {
        [Sequelize.Op.in]: followingIds,
      },
    },
    include: [{ model: Profile, as: "profile" }],
    attributes: {
      exclude: ["password"],
      include: [
        [
          Sequelize.literal(
            "(SELECT COUNT(*) FROM relationships WHERE follower_id = User.uuid)"
          ),
          "followerCount",
        ],
        [
          Sequelize.literal(
            "(SELECT COUNT(*) FROM relationships WHERE following_id = User.uuid)"
          ),
          "followingCount",
        ],
        [
          Sequelize.literal(
            "(SELECT COUNT(*) FROM posts WHERE user_id = User.uuid)"
          ),
          "postCount",
        ],
      ],
    },
  });

  return res
    .status(httpStatus.OK)
    .json(
      responseHandler.returnSuccess(
        "Following retrieved successfully",
        followingData
      )
    );
});

const getFollowers = withAsync(async (req, res, next) => {
  const { uuid: userId } = req.user;

  const followers = await Relationship.findAll({
    where: { followingId: userId },
    include: [
      {
        model: User,
        as: "follower",
        attributes: {
          exclude: ["password"],
          include: [
            [
              Sequelize.literal(
                "(SELECT COUNT(*) FROM relationships WHERE follower_id = follower.uuid)"
              ),
              "followerCount",
            ],
            [
              Sequelize.literal(
                "(SELECT COUNT(*) FROM relationships WHERE following_id = follower.uuid)"
              ),
              "followingCount",
            ],
            [
              Sequelize.literal(
                "(SELECT COUNT(*) FROM posts WHERE user_id = follower.uuid)"
              ),
              "postCount",
            ],
          ],
        },
        include: [{ model: Profile, as: "profile" }],
      },
    ],
  });

  const followersData = followers.map((rel) => rel.follower);

  return res
    .status(httpStatus.OK)
    .json(
      responseHandler.returnSuccess(
        "Followers retrieved successfully",
        followersData
      )
    );
});

const getNonFollowing = withAsync(async (req, res, next) => {
  const { uuid: userId } = req.user;

  const following = await Relationship.findAll({
    where: { followerId: userId },
    attributes: ["followingId"],
    raw: true,
  });

  const followingIds = following.map((rel) => rel.followingId);

  const nonFollowing = await User.findAll({
    where: {
      uuid: {
        [Sequelize.Op.notIn]: [...followingIds, userId],
      },
    },
    include: [{ model: Profile, as: "profile" }],
    attributes: {
      exclude: ["password"],
      include: [
        [
          Sequelize.literal(
            "(SELECT COUNT(*) FROM relationships WHERE follower_id = User.uuid)"
          ),
          "followerCount",
        ],
        [
          Sequelize.literal(
            "(SELECT COUNT(*) FROM relationships WHERE following_id = User.uuid)"
          ),
          "followingCount",
        ],
        [
          Sequelize.literal(
            "(SELECT COUNT(*) FROM posts WHERE user_id = User.uuid)"
          ),
          "postCount",
        ],
      ],
    },
  });

  return res
    .status(httpStatus.OK)
    .json(
      responseHandler.returnSuccess(
        "Non-following users retrieved successfully",
        nonFollowing
      )
    );
});

const getUser = withAsync(async (req, res, next) => {
  const { userId } = req.params;

  const user = await User.findByPk(userId, {
    include: [{ model: Profile, as: "profile" }],
    attributes: {
      exclude: ["password"],
      include: [
        [
          Sequelize.literal(
            "(SELECT COUNT(*) FROM relationships WHERE follower_id = User.uuid)"
          ),
          "followerCount",
        ],
      ],
    },
  });

  if (!user) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json(responseHandler.returnError("User not found"));
  }

  return res
    .status(httpStatus.OK)
    .json(responseHandler.returnSuccess("User retrieved successfully", user));
});

const getUserImages = withAsync(async (req, res, next) => {
  const { userId } = req.params;

  const images = await Image.findAll({
    where: { userId },
  });

  return res
    .status(httpStatus.OK)
    .json(
      responseHandler.returnSuccess("Images retrieved successfully", images)
    );
});

const getUserPosts = withAsync(async (req, res, next) => {
  const { userId } = req.params;

  const posts = await Post.findAll({
    where: { userId },
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
    order: [["createdAt", "DESC"]],
  });

  return res
    .status(httpStatus.OK)
    .json(responseHandler.returnSuccess("Posts retrieved successfully", posts));
});

const updateMe = withAsync(async (req, res, next) => {
  delete req.body.email;

  const { firstName, lastName, address, city, country, bio } = req.body;
  const { uuid: userId } = req.user;

  await User.update({ firstName, lastName }, { where: { uuid: userId } });

  const [profile, created] = await Profile.findOrCreate({
    where: { userId },
    defaults: { uuid: uuidv4(), address, city, country, bio },
  });

  if (!created) {
    await profile.update({ address, city, country, bio });
  }

  const updatedUser = await User.findOne({
    where: { uuid: userId },
    include: [{ model: Profile, as: "profile" }],
    attributes: {
      exclude: ["password"],
    },
  });

  return res
    .status(httpStatus.OK)
    .json(
      responseHandler.returnSuccess("User updated successfully", updatedUser)
    );
});

const updateImages = withAsync(async (req, res, next) => {
  const { profilePicture, coverPicture } = req.files;
  const { uuid: userId } = req.user;

  const user = await User.findByPk(userId);

  let images = {};

  if (profilePicture) {
    const result = await cloudinary.uploader.upload(profilePicture[0].path, {
      folder: FOLDER,
      format: "webp",
      transformation: {
        height: 200,
        width: 200,
        crop: "fill",
        gravity: "face",
        quality: "auto",
        fetch_format: "auto",
      },
    });
    images.profilePicture = result;
  }

  if (coverPicture) {
    const result = await cloudinary.uploader.upload(coverPicture[0].path, {
      folder: FOLDER,
      format: "webp",
      transformation: {
        height: 320,
        width: 1200,
        crop: "fill",
        gravity: "face",
        quality: "auto",
        fetch_format: "auto",
      },
    });
    images.coverPicture = result;
  }

  if (images.profilePicture && user.profilePicture) {
    await cloudinary.uploader.destroy(user.profilePictureId);
  }

  if (images.coverPicture && user.coverPicture) {
    await cloudinary.uploader.destroy(user.coverPictureId);
  }

  const updateData = {};
  if (images.profilePicture) {
    updateData.profilePicture = images.profilePicture.secure_url;
    updateData.profilePictureId = images.profilePicture.public_id;
  }
  if (images.coverPicture) {
    updateData.coverPicture = images.coverPicture.secure_url;
    updateData.coverPictureId = images.coverPicture.public_id;
  }

  await User.update(updateData, { where: { uuid: userId } });

  const newUser = await User.findOne({
    where: { uuid: userId },
    include: [{ model: Profile, as: "profile" }],
    attributes: {
      exclude: ["password"],
    },
  });

  return res
    .status(httpStatus.OK)
    .json(responseHandler.returnSuccess("User updated successfully", newUser));
});

module.exports = {
  getMe,
  getFollowing,
  getFollowers,
  getNonFollowing,
  getUser,
  getUserImages,
  getUserPosts,
  updateMe,
  updateImages,
};
