// models/providerHighlights.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ProviderHighlights = sequelize.define(
  'ProviderHighlights',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    highlights: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      allowNull: false,
      defaultValue: 'active'
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
    tableName: 'provider_highlights',
    timestamps: false,
    underscored: true
  });

export default ProviderHighlights;
