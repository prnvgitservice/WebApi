// models/ratingTypeLang.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const RatingTypeLang = sequelize.define(
  'RatingTypeLang',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rating_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: 'utf8mb4_general_ci'
    },
    lang_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: 'utf8mb4_general_ci'
    }
  },
  {
    tableName: 'rating_type_lang',
    timestamps: false,
    underscored: true
  });

export default RatingTypeLang;
