"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Relationship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Relationship.belongsTo(models.User, {
        foreignKey: "followerId",
        targetKey: "uuid",
        as: "follower",
      });
      Relationship.belongsTo(models.User, {
        foreignKey: "followingId",
        targetKey: "uuid",
        as: "following",
      });
    }
  }
  Relationship.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      followerId: DataTypes.UUID,
      followingId: DataTypes.UUID,
    },
    {
      underscored: true,
      sequelize,
      modelName: "Relationship",
    }
  );
  return Relationship;
};
