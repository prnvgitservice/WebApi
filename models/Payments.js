import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Payment = sequelize.define(
  "Payment",
  {
    payment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    txn_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb3_unicode_ci",
    },
    payment_gross: {
      type: DataTypes.FLOAT(10, 2),
      allowNull: false,
    },
    currency_code: {
      type: DataTypes.STRING(5),
      allowNull: false,
      collate: "utf8mb3_unicode_ci",
    },
    payer_email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb3_unicode_ci",
    },
    payment_status: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb3_unicode_ci",
    },
  },
  {
    tableName: "payments",
    timestamps: false,
  }
);

export default Payment;
