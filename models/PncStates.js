import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PncStates = sequelize.define(
  "PncStates",
  {
    St_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    St_Name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      collate: "utf8mb4_unicode_ci",
    },
    St_MetaTitle: {
      type: DataTypes.STRING(255),
      allowNull: true,
      collate: "utf8mb4_unicode_ci",
    },
    St_MetaDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
      collate: "utf8mb4_unicode_ci",
    },
    St_keywords: {
      type: DataTypes.STRING(255),
      allowNull: true,
      collate: "utf8mb4_unicode_ci",
    },
    St_SocialMediaSharing: {
      type: DataTypes.STRING(255),
      allowNull: true,
      collate: "utf8mb4_unicode_ci",
    },
  },
  {
    tableName: "Pnc_States",
    timestamps: false,
  }
);

export default PncStates;
