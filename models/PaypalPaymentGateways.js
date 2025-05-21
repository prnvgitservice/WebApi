import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PaypalPaymentGateway = sequelize.define(
  "PaypalPaymentGateway",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    braintree_key: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    gateway_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    braintree_merchant: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    braintree_publickey: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    braintree_privatekey: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    paypal_appid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    paypal_appkey: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    created_dt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "paypal_payment_gateways",
    timestamps: false,
  }
);

export default PaypalPaymentGateway;
