"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(models.Post, {
        as: "post",
        foreignKey: "postId",
        targetKey: "id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Image.belongsTo(models.User, {
        as: "user",
        foreignKey: "userId",
        targetKey: "uuid",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  Image.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      userId: DataTypes.UUID,
      postId: DataTypes.INTEGER,
      url: DataTypes.TEXT,
      publicId: DataTypes.STRING,
    },
    {
      underscored: true,
      sequelize,
      modelName: "Image",
    }
  );

  return Image;
};
