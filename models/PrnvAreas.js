import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PrnvAreas = sequelize.define(
  "PrnvAreas",
  {
    Ar_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Ar_Name: {
      type: DataTypes.STRING(120),
      allowNull: true,
      collate: "utf8mb4_general_ci",
    },
    Ar_slug: {
      type: DataTypes.STRING(120),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    Ar_Pnc_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // This likely references Pnc_Cities or another table. Define association separately.
    },
    Ar_Meta_Title: {
      type: DataTypes.STRING(150),
      allowNull: true,
      collate: "utf8mb4_general_ci",
    },
    Ar_Meta_Description: {
      type: DataTypes.STRING(200),
      allowNull: true,
      collate: "utf8mb4_general_ci",
    },
    Ar_Meta_Keywords: {
      type: DataTypes.STRING(200),
      allowNull: true,
      collate: "utf8mb4_general_ci",
    },
    Ar_Content: {
      type: DataTypes.TEXT,
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    Ar_Meta_SocialMedia_Sharing_Image: {
      type: DataTypes.STRING(500),
      allowNull: true,
      collate: "utf8mb4_general_ci",
    },
    Ar_CreatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Ar_LastModifiedDateTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "prnv_areas",
    timestamps: false,
  }
);

export default PrnvAreas;
