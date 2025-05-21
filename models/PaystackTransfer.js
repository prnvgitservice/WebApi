import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PaystackTransfer = sequelize.define(
  "PaystackTransfer",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transfer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transfer_code: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    recipient_id: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    reference_key: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    source: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    domain: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    currency: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "paystack_transfer",
    timestamps: false,
  }
);

export default PaystackTransfer;
