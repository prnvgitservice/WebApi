import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AppLanguageManagement = sequelize.define(
  "AppLanguageManagement",
  {
    sno: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    page_key: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    lang_key: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    lang_value: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    placeholder: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    validation1: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    validation2: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    validation3: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    language: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "app_language_management",
    timestamps: false,
  }
);

export default AppLanguageManagement;
