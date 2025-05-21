import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const CashfreeGateway = sequelize.define(
  "CashfreeGateway",
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
    },
    gateway_type: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    api_key: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    secret_key: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "0-inactive,1-active",
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "cashfree_gateway",
    timestamps: false,
  }
);

export default CashfreeGateway;
