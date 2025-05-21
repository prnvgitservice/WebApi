import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const ForgetPasswordDet = sequelize.define(
  "ForgetPasswordDet",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: true,
      collate: "latin1_swedish_ci",
    },
    pwdlink: {
      type: DataTypes.STRING(500),
      allowNull: true,
      collate: "latin1_swedish_ci",
    },
    user_type: {
      type: DataTypes.STRING(250),
      allowNull: true,
      collate: "latin1_swedish_ci",
    },
    token: {
      type: DataTypes.STRING(250),
      allowNull: true,
      collate: "latin1_swedish_ci",
    },
    endtime: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_on: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "forget_password_det",
    timestamps: false,
  }
);

export default ForgetPasswordDet;
