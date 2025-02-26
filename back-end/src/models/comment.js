"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "uuid",
        as: "author",
      });
      Comment.belongsTo(models.Post, {
        foreignKey: "postId",
        targetKey: "id",
        as: "post",
      });
    }
  }
  Comment.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      content: DataTypes.TEXT,
      userId: DataTypes.UUID,
      postId: DataTypes.INTEGER,
    },
    {
      underscored: true,
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
