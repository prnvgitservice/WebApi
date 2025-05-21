import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const EmailMarketing = sequelize.define(
  "EmailMarketing",
  {
    emId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    company_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    mobileno: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    status: {
      type: DataTypes.ENUM("1", "2", "3"),
      allowNull: false,
      comment: "1-Interested, 2-not interested, 3-Deleted",
    },
    added_by: {
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
  },
  {
    tableName: "email_marketing",
    timestamps: false,
  }
);

export default EmailMarketing;
