import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const DmForgotPwd = sequelize.define(
  "DmForgotPwd",
  {
    dmfpId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    pwd_link: {
      type: DataTypes.TEXT,
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    token: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    endtime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "dm_forgot_pwd",
    timestamps: false,
  }
);

export default DmForgotPwd;
