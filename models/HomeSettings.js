import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const HomeSettings = sequelize.define(
  "HomeSettings",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    modules: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    lang_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb4_general_ci",
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
  },
  {
    tableName: "home_settings",
    timestamps: false,
  }
);

export default HomeSettings;
