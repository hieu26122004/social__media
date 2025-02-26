"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
      profilePicture: DataTypes.STRING,
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
