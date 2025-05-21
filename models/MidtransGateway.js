import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const MidtransGateway = sequelize.define(
  "MidtransGateway",
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
      collate: "utf8mb4_general_ci",
    },
    merchant_id: {
      type: DataTypes.STRING(200),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    client_key: {
      type: DataTypes.STRING(200),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    serverkey_key: {
      type: DataTypes.STRING(200),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    merchant_server_url: {
      type: DataTypes.STRING(200),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "0-inactive, 1-active",
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "midtrans_gateway",
    timestamps: false,
  }
);

export default MidtransGateway;
