import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";  

const BlogCategories = sequelize.define(
  "BlogCategories",
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    keywords: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    category_order: {
      type: DataTypes.TINYINT,
      allowNull: true,
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
    tableName: "blog_categories",
    timestamps: false, // Disable automatic timestamps since we are using custom fields
  }
);

export default BlogCategories;
