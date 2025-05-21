import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const SubscriptionExpiredMail = sequelize.define(
    'SubscriptionExpiredMail',
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
        subscriper_id: {  // note: your schema spells it 'subscriper_id', keep consistent
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        expiry_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        message_status: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_datetime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: 'subscription_expired_mail',
        timestamps: false,
        underscored: true,
    });

export default SubscriptionExpiredMail;
