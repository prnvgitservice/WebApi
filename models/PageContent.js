import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PageContent = sequelize.define(
  "PageContent",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    page_title: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    page_slug: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    page_content: {
      type: DataTypes.TEXT,
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    page_route: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    page_meta_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    page_meta_desc: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    page_meta_keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    created_datetime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_datetime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    modules: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
  },
  {
    tableName: "page_content",
    timestamps: false,
  }
);

export default PageContent;
