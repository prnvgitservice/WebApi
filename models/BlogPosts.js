import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";  

const BlogPosts = sequelize.define(
  "BlogPosts",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    lang_id: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1, // Default language ID
    },
    title: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    slug: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    summary: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT, // Using TEXT for long content
      allowNull: true,
    },
    keywords: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    storage: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: 'local', // Default storage
    },
    image_default: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    image_small: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    total_views: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0, // Default total views
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1, // Default user ID
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    blog_meta_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // Default status
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Current timestamp
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "blog_posts",
    timestamps: false,
  }
);

export default BlogPosts;
