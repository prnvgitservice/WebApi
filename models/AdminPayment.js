import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AdminPayment = sequelize.define(
  "AdminPayment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    account_holder_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    account_number: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    account_iban: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    bank_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    bank_address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    sort_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    routing_number: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    account_ifsc: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    transaction_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    booking_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "admin_payment",
    timestamps: false,
  }
);

export default AdminPayment;
