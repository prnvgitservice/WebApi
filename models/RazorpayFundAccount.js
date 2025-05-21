// models/razorpayFundAccount.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const RazorpayFundAccount = sequelize.define(
  'RazorpayFundAccount',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fund_account_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    entity: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    contact_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    account_type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    ifsc: {
      type: DataTypes.STRING(200),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    bank_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    account_number: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    active: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    batch_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      collate: 'utf8mb4_general_ci',
    },
    created_at: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
  },
  {
    tableName: 'razorpay_fund_account',
    timestamps: false,
    underscored: true,
  });

export default RazorpayFundAccount;
