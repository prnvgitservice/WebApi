// models/razorpayContact.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const RazorpayContact = sequelize.define(
  'RazorpayContact',
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
    rp_contactid: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    entity: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    contact: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    reference_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    batch_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      collate: 'utf8mb4_general_ci',
    },
    active: {
      type: DataTypes.STRING(10),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    accountnumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    mode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    purpose: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      collate: 'utf8mb4_general_ci',
    },
    created_at: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: 'utf8mb4_general_ci',
    },
  },
  {
    tableName: 'razorpay_contact',
    timestamps: false,
    underscored: true,
  });

export default RazorpayContact;
