// models/providerRefundRequest.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ProviderRefundRequest = sequelize.define(
  'ProviderRefundRequest',
  {
    prrId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    refund_amount: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    request_type: {
      type: DataTypes.ENUM('Refund', 'Subscription'),
      allowNull: false
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    added_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    request_status: {
      type: DataTypes.ENUM('Pending', 'Approved', 'Rejected'),
      allowNull: false
    }
  },
  {
    tableName: 'provider_refund_requests',
    timestamps: false,
    underscored: true
  });

export default ProviderRefundRequest;
