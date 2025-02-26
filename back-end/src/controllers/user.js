const withAsync = require("../helper/with-async");
const httpStatus = require("http-status");
const { User, Relationship } = require("../models/index");
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

  const followedUsers = await Relationship.findAll(
    {
      where: { followerId: userId },
      attributes: ["followingId"],
    },
    { raw: true }
  );

  const unfollowedUsers = await User.findAll({
    where: {
      uuid: {
        [Op.notIn]: followedUsers,
        [Op.ne]: userId,
      },
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
