import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const FlutterwaveGateway = sequelize.define(
  "FlutterwaveGateway",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    gateway_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    gateway_type: {
      type: DataTypes.STRING(200),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    public_key: {
      type: DataTypes.STRING(200),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    secret_key: {
      type: DataTypes.STRING(200),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    encryption_key: {
      type: DataTypes.STRING(200),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // 0-inactive, 1-active
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "flutterwave_gateway",
    timestamps: false,
  }
);

export default FlutterwaveGateway;
