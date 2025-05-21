// models/razorpayPayouts.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const RazorpayPayouts = sequelize.define(
  'RazorpayPayouts',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    payout_id: {
      type: DataTypes.STRING(200),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    entity: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    fund_account_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING(20),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      collate: 'utf8mb4_general_ci',
    },
    fees: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tax: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    utr: {
      type: DataTypes.STRING(100),
      allowNull: true,
      collate: 'utf8mb4_general_ci',
    },
    mode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    purpose: {
      type: DataTypes.STRING(20),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    reference_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      collate: 'utf8mb4_general_ci',
    },
    narration: {
      type: DataTypes.STRING(50),
      allowNull: true,
      collate: 'utf8mb4_general_ci',
    },
    batch_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      collate: 'utf8mb4_general_ci',
    },
    failure_reason: {
      type: DataTypes.TEXT,
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
    tableName: 'razorpay_payouts',
    timestamps: false,
    underscored: true,
  });

export default RazorpayPayouts;
