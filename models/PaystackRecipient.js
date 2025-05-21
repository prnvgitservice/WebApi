import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PaystackRecipient = sequelize.define(
  "PaystackRecipient",
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
    name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: true,
      collate: "utf8mb4_general_ci",
    },
    account_number: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    account_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    bank_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bank_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    authorization_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    recipient_code: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    transfer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    domain: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    currency: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: "utf8mb4_general_ci",
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
    tableName: "paystack_recipient",
    timestamps: false,
  }
);

export default PaystackRecipient;
