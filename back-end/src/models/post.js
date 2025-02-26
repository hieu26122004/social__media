"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "uuid",
        as: "author",
      });

      Post.hasMany(models.Like, {
        foreignKey: "postId",
        sourceKey: "id",
        as: "likes",
      });

      Post.hasMany(models.Comment, {
        foreignKey: "postId",
        sourceKey: "id",
        as: "comments",
      });

      Post.hasMany(models.Image, {
        foreignKey: "postId",
        sourceKey: "id",
        as: "images",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: DataTypes.TEXT,
      userId: DataTypes.UUID,
    },
    {
      underscored: true,
      sequelize,
      modelName: "Post",
    }
  );

  return Post;
};
