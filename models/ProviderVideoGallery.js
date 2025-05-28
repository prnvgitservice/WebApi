// models/providerVideoGallery.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ProviderVideoGallery = sequelize.define(
  'ProviderVideoGallery',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    video_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('approved', 'rejected', 'pending'),
      allowNull: false,
      defaultValue: 'pending'
    },
    deleted: {
      type: DataTypes.ENUM('0', '1'), // 0 - not deleted, 1 - deleted
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
    tableName: 'provider_video_gallery',
    timestamps: false,
    underscored: true
  });

export default ProviderVideoGallery;
