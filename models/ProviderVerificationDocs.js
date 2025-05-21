// models/providerVerificationDoc.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ProviderVerificationDoc = sequelize.define(
  'ProviderVerificationDoc',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    documents: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ref_mobile1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ref_mobile2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2, // 1 - Verified, 2 - Submitted, 3 - Rejected
    }
  },
  {
    tableName: 'provider_verification_docs',
    timestamps: false,
    underscored: true
  });

export default ProviderVerificationDoc;
