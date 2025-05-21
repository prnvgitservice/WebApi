import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ReferralMoney = sequelize.define(
  'ReferralMoney',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    referred_by: {
      type: DataTypes.STRING(250),
      allowNull: true,
      collate: 'utf8mb4_unicode_ci',
    },
    refferred_to: {
      type: DataTypes.STRING(250),
      allowNull: true,
      collate: 'utf8mb4_unicode_ci',
    },
  },
  {
    tableName: 'refferal_money',
    timestamps: false,
    underscored: true,
  });

export default ReferralMoney;
