// models/razorpayGateway.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const RazorpayGateway = sequelize.define(
  'RazorpayGateway',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    gateway_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: 'utf8mb3_general_ci',
    },
    gateway_type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: 'utf8mb3_general_ci',
    },
    api_key: {
      type: DataTypes.TEXT,
      allowNull: false,
      collate: 'utf8mb3_general_ci',
    },
    api_secret: {
      type: DataTypes.TEXT,
      allowNull: false,
      collate: 'utf8mb3_general_ci',
    },
    razorpayx_acc_number: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: 'utf8mb3_general_ci',
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // 0->inactive, 1->active
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'razorpay_gateway',
    timestamps: false,
    underscored: true,
  });

export default RazorpayGateway;
