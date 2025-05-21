// models/pushNotification.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const PushNotification = sequelize.define(
  'PushNotification',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    subject: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    provider_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    updated_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    tableName: 'push_notification',
    timestamps: false,
    underscored: true,
    hooks: {
      beforeUpdate: (notification) => {
        notification.updated_on = new Date();
      }
    }
  });

export default PushNotification;
