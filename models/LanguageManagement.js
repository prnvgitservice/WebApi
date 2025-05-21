import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const LanguageManagement = sequelize.define(
  "LanguageManagement",
  {
    sno: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    lang_key: {
      type: DataTypes.TEXT("medium"),
      allowNull: true,
      collate: "utf8mb3_general_ci",
    },
    lang_value: {
      type: DataTypes.TEXT("medium"),
      allowNull: true,
      collate: "utf8mb3_general_ci",
    },
    language: {
      type: DataTypes.TEXT("medium"),
      allowNull: true,
      collate: "utf8mb3_general_ci",
    },
    type: {
      type: DataTypes.TEXT("medium"),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
  },
  {
    tableName: "language_management",
    timestamps: false,
  }
);

export default LanguageManagement;
