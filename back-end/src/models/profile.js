"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "uuid",
        as: "user",
      });
    }
  }
  Profile.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      userId: DataTypes.UUID,
      bio: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
    },
    {
      underscored: true,
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
