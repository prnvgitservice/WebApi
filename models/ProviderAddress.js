// models/providerAddress.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ProviderAddress = sequelize.define(
  'ProviderAddress',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    tableName: 'provider_address',
    timestamps: false,
    underscored: true
  });

export default ProviderAddress;
