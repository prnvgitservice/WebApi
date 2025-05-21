import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const SubscriptionDetails = sequelize.define(
    'SubscriptionDetails',
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
        minimum_business: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        paid_status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        payment_done_on: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        Admin_Accepeted_Payment: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        }
    },
    {
        tableName: 'subscription_details',
        timestamps: false,
        underscored: true,
    });

export default SubscriptionDetails;
