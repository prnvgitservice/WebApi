import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const SubscriptionPayment = sequelize.define(
    'SubscriptionPayment',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        sub_id: {
            type: DataTypes.INTEGER,
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
        tokenid: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
        },
        payment_details: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
        },
        paytype: {
            type: DataTypes.STRING(250),
            allowNull: false,
        },
        upload_doc: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        plan_change: {
            type: DataTypes.ENUM('1', '2'),
            allowNull: false,
            comment: '1- Not Changed, 2- Changed',
        },
        sub_type: {
            type: DataTypes.ENUM('1', '2', '3'),
            allowNull: false,
            comment: "1-Paid, 2-Free, 3-Wallet Amount",
        },
    },
    {
        tableName: 'subscription_payment',
        timestamps: false,
        underscored: true,
    });

export default SubscriptionPayment;
