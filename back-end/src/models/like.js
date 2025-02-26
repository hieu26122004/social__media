"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Like.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "uuid",
        as: "user",
      });
      Like.belongsTo(models.Post, {
        foreignKey: "postId",
        targetKey: "id",
        as: "post",
      });
    }
  }
  Like.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      userId: DataTypes.UUID,
      postId: DataTypes.INTEGER,
    },
    {
      underscored: true,
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};
