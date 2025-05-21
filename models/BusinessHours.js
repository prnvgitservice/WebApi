import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";  

const BusinessHours = sequelize.define(
  "BusinessHours",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    provider_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    all_days: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1, // Default value indicating availability for all days
    },
    availability: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "business_hours",
    timestamps: false, // Disable automatic timestamps since we are using custom fields
  }
);

export default BusinessHours;
