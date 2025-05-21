import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const BankAccount = sequelize.define(
  "BankAccount",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    account_holder_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    acc_no: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    account_iban: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    bank_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    bank_addr: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    ifsc_code: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    pancard_no: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    sort_code: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    routing_number: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    paypal_account: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    paypal_email_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    contact_number: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    mode: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    purpose: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "bank_account",
    timestamps: false,
  }
);

export default BankAccount;
