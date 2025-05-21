import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const MobileOtp = sequelize.define(
  "MobileOtp",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    mobile_number: {
      type: DataTypes.STRING(15),
      allowNull: false,
      collate: "latin1_swedish_ci",
    },
    country_code: {
      type: DataTypes.STRING(15),
      allowNull: true,
      collate: "latin1_swedish_ci",
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    endtime: {
      type: DataTypes.INTEGER(30),
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER(1),
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
    tableName: "mobile_otp",
    timestamps: false,
  }
);

export default MobileOtp;
