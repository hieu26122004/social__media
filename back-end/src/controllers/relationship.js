const withAsync = require("../helper/with-async");
const responseHandler = require("../helper/response-handler");
const httpStatus = require("http-status");
const { v4: uuidv4 } = require("uuid");
const { User, Relationship } = require("../models/index");

const toggleFollow = withAsync(async (req, res, next) => {
  const { uuid: followerId } = req.user;
  const { followingId } = req.params;

  const followedUser = await User.findByPk(followingId);

  if (!followedUser) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json(responseHandler.returnError("User not found"));
  }

  const relationship = await Relationship.findOne({
    where: { followerId, followingId },
  });

  if (relationship) {
    await relationship.destroy();
    return res.status(httpStatus.OK).json(
      responseHandler.returnSuccess("Unfollowed successfully", {
        follow: false,
      })
    );
  } else {
    const newRelationship = await Relationship.create({
      uuid: uuidv4(),
      followerId,
      followingId,
    });

    return res.status(httpStatus.CREATED).json(
      responseHandler.returnSuccess("Followed successfully", {
        follow: true,
      })
    );
  }
});

module.exports = {
  toggleFollow,
};
