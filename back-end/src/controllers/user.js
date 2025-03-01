const withAsync = require("../helper/with-async");
const httpStatus = require("http-status");
const { User, Relationship, Profile, Sequelize } = require("../models/index");
const responseHandler = require("../helper/response-handler");
const { Op } = require("sequelize");

const getMe = withAsync(async (req, res, next) => {
  if (!req.user) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .json(
        responseHandler.returnError("User not authenticated or not found!")
      );
  }

  return res
    .status(httpStatus.OK)
    .json(
      responseHandler.returnSuccess("User retrieved successfully", req.user)
    );
});

const getFollowing = withAsync(async (req, res, next) => {
  const { uuid: userId } = req.user;

  const following = await Relationship.findAll({
    where: { followerId: userId },
    attributes: ["followingId"],
    raw: true,
  });

  const followingIds = following.map((rel) => rel.followingId);

  const followingData = await User.findAll({
    where: {
      uuid: {
        [Op.in]: followingIds,
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
        [Op.notIn]: [...followingIds, userId],
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

module.exports = { getMe, getFollowing, getFollowers, getNonFollowing };
