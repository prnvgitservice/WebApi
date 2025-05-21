import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const SubscriptionDetailsHistory = sequelize.define(
    'SubscriptionDetailsHistory',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        subscription_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        subscriber_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        paid_status: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        subscription_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        expiry_date_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '1-provider, 2-user',
        },
    },
    {
        tableName: 'subscription_details_history',
        timestamps: false,
        underscored: true,
    });

export default SubscriptionDetailsHistory;
