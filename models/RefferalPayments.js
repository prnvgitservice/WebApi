import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ReferralPayments = sequelize.define(
  'ReferralPayments',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    refferal_id: {
      type: DataTypes.STRING(200),
      allowNull: false,
      collate: 'utf8mb4_unicode_ci',
    },
    paid_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    paid_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paid_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: true,
      collate: 'utf8mb4_unicode_ci',
    },
    username: {
      type: DataTypes.STRING(250),
      allowNull: true,
      collate: 'utf8mb4_unicode_ci',
    },
  },
  {
    tableName: 'refferal_payments',
    timestamps: false,
    underscored: true,
  });

export default ReferralPayments;
