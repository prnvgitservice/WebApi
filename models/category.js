import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    category_name: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    category_slug: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: true,
    },
    other_slug: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    category_image: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    thumb_image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    cat_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    category_description_content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    cat_desc_image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    category_mobile_icon: {
      type: DataTypes.STRING(225),
      allowNull: true,
    },
    is_featured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    status: {
      type: DataTypes.INTEGER(11),
      defaultValue: 1,
    },
    totalviews: {
      type: DataTypes.INTEGER(11),
      defaultValue: 0,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    meta_title: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    heading: {
      type: DataTypes.STRING(250),
      allowNull: true,
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
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
  },
  {
    tableName: "categories",
    timestamps: false,
  }
);

sequelize
  .sync()
  .then(({ models }) => {
    if (models.CategoryDetails) {
      console.log("✅ CategoryDetails table already exists.");
    } else {
      console.log("✅ CategoryDetails table created.");
    }
  })
  .catch((err) => {
    console.error("❌ Error creating CategoryDetails table:", err);
  });


export default Category;
