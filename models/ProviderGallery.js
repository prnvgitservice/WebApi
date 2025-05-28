// models/providerGallery.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ProviderGallery = sequelize.define(
  'ProviderGallery',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    files: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    videos: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('approved', 'rejected', 'pending'),
      allowNull: false,
      defaultValue: 'pending'
    },
    deleted: {
      type: DataTypes.ENUM('0', '1'),
      allowNull: false,
      defaultValue: '0'
    },
    rejected_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  {
    tableName: 'provider_gallery',
    timestamps: false,
    underscored: true
  });

export default ProviderGallery;
