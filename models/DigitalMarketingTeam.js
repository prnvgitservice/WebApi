import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const DigitalMarketingTeam = sequelize.define(
  "DigitalMarketingTeam",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    token: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    added_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    status: {
      type: DataTypes.ENUM("Active", "Inactive", "Deleted"),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    profile_pic: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
  },
  {
    tableName: "digital_marketing_team",
    timestamps: false,
  }
);

export default DigitalMarketingTeam;
