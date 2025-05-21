// models/ratingReview.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const RatingReview = sequelize.define(
  'RatingReview',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    booking_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.FLOAT(2, 1),
      allowNull: false
    },
    review: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: '1-active, 2-inactive'
    },
    delete_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '1-delete, 0-not delete'
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    tableName: 'rating_review',
    timestamps: false,
    underscored: true
  });

export default RatingReview;
