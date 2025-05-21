import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PaymentGateway = sequelize.define(
  "PaymentGateway",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    gateway_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    gateway_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    api_key: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    value: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // 0 Inactive, 1 Active
    },
    created_dt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "payment_gateways",
    timestamps: false,
  }
);

export default PaymentGateway;
