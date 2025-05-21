import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const SubscriptionLang = sequelize.define(
    'SubscriptionLang',
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
        subscription_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        lang_type: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        tableName: 'subscription_lang',
        timestamps: false,
        underscored: true,
    });

export default SubscriptionLang;
