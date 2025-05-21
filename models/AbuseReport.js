import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AbuseReport = sequelize.define(
  "AbuseReport",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    pro_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    report_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "under_review", "resolved", "rejected"),
      defaultValue: "pending",
    },
  },
  {
    tableName: "abuse_reports",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false, // disable updatedAt as it's not required
  }
);

export default AbuseReport;
