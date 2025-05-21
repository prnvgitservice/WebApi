import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PagesList = sequelize.define(
  "PagesList",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    lang_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 28,
    },
    title: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      collate: "utf8mb3_general_ci",
    },
    slug: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      collate: "utf8mb3_general_ci",
    },
    page_meta_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    page_meta_desc: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    page_meta_keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      collate: "utf8mb3_general_ci",
    },
    keywords: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      collate: "utf8mb3_general_ci",
    },
    page_content: {
      type: DataTypes.TEXT('long'),
      allowNull: true,
      defaultValue: null,
      collate: "utf8mb3_general_ci",
    },
    visibility: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
    },
    location: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "information",
      collate: "utf8mb3_general_ci",
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    delete_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    page_heading: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      collate: "utf8mb3_general_ci",
    },
  },
  {
    tableName: "pages_list",
    timestamps: false,
  }
);

export default PagesList;
