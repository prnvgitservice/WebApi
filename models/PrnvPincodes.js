import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PrnvPincodes = sequelize.define(
  "PrnvPincodes",
  {
    Pnc_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    prnv_sa_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Pnc_aliasname: {
      type: DataTypes.STRING(120),
      allowNull: true,
    },
    Pnc_Code: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    Pnc_Description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Pnc_City: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Pnc_State: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Pnc_Country: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Pnc_Meta_Title: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    Pnc_Meta_Description: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    Pnc_Meta_Keywords: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    Pnc_Meta_SocialMedia_Sharing_Image: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    Pnc_CreatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Pnc_LastModifiedDateTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "prnv_pincodes",
    timestamps: false,
  }
);

export default PrnvPincodes;
