// models/providerPromocode.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ProviderPromocode = sequelize.define(
  'ProviderPromocode',
  {
    ppId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    promocode: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    promocode_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    from_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    to_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    use_code_status: {
      type: DataTypes.ENUM('Not Used', 'Used'),
      allowNull: false
    },
    added_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    tableName: 'provider_promocode',
    timestamps: false,
    underscored: true
  });

export default ProviderPromocode;
