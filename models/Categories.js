import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// Define the model for the Categories
const Categories = sequelize.define(
  "Categories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING(500),
      allowNull: false,
      charset: "utf8mb3",
      collate: "utf8mb3_unicode_ci",
    },
    category_slug: {
      type: DataTypes.STRING(250),
      allowNull: false,
      charset: "utf8mb3",
      collate: "utf8mb3_general_ci",
    },
    other_slug: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    category_image: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    thumb_image: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    cat_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    category_description_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cat_desc_image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category_mobile_icon: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    is_featured: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalviews: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    meta_title: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: null,
    },
    heading: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    meta_description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    meta_keywords: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    home_page_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "categories",
    timestamps: false,
  }
);


export default Categories;
