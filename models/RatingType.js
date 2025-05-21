// models/ratingType.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const RatingType = sequelize.define(
  'RatingType',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: 'latin1_swedish_ci'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '0-active, 1-inactive'
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    tableName: 'rating_type',
    timestamps: false,
    underscored: true
  });

export default RatingType;
