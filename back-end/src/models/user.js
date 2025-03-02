"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Profile, {
        foreignKey: "userId",
        targetKey: "uuid",
        as: "profile",
      });
    }
  }
  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      coverPicture: DataTypes.STRING,
      coverPictureId: DataTypes.STRING,
      profilePicture: DataTypes.STRING,
      profilePictureId: DataTypes.STRING,
      roles: {
        type: DataTypes.STRING,
        defaultValue: "user",
        get() {
          const raw = this.getDataValue("roles");
          return raw ? raw.split(",") : [];
        },
      },
    },
    {
      underscored: true,
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
