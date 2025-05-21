// models/razorpayPayments.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const RazorpayPayments = sequelize.define(
  'RazorpayPayments',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    razorpay_payment_id: {
      type: DataTypes.STRING(200),
      allowNull: false,
      collate: 'utf8mb3_general_ci',
    },
    payment_date: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: 'utf8mb3_general_ci',
    },
  },
  {
    tableName: 'razorpay_payments',
    timestamps: false,
    underscored: true,
  });

export default RazorpayPayments;
