import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const HeaderSettings = sequelize.define(
  "HeaderSettings",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    header_option: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    header_logo: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    language_option: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currency_option: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sticky_header: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    header_menu_option: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    header_menus: {
      type: DataTypes.TEXT,
      allowNull: true,
      collate: "utf8mb4_general_ci",
    },
    reset_menu: {
      type: DataTypes.TEXT,
      allowNull: true,
      collate: "utf8mb4_general_ci",
    },
    created_datetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_datetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "header_settings",
    timestamps: false,
  }
);

export default HeaderSettings;
