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

const getUnfollowedUsers = withAsync(async (req, res, next) => {
  const { uuid: userId } = req.user;

  const followedUsers = await Relationship.findAll({
    where: { followerId: userId },
    attributes: ["followingId"],
    raw: true,
  });

  const followedUserIds = followedUsers.map((user) => user.followingId);

  const unfollowedUsers = await User.findAll({
    where: {
      uuid: {
        [Op.notIn]: followedUserIds,
        [Op.ne]: userId,
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
        "User retrieved successfully",
        unfollowedUsers
      )
    );
});

module.exports = { getMe, getUnfollowedUsers };
