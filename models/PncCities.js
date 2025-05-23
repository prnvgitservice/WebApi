import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PncCities = sequelize.define(
  "PncCities",
  {
    Ct_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Ct_Name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      collate: "utf8mb4_unicode_ci",
    },
    Ct_StateId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Ct_MetaTitle: {
      type: DataTypes.STRING(255),
      allowNull: true,
      collate: "utf8mb4_unicode_ci",
    },
    Ct_MetaDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
      collate: "utf8mb4_unicode_ci",
    },
    Ct_keywords: {
      type: DataTypes.STRING(255),
      allowNull: true,
      collate: "utf8mb4_unicode_ci",
    },
    Ct_SocialMediaSharing: {
      type: DataTypes.STRING(255),
      allowNull: true,
      collate: "utf8mb4_unicode_ci",
    },
  },
  {
    tableName: "Pnc_Cities",
    timestamps: false,
  }
);

export default PncCities;
