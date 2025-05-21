import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const StripeProvider = sequelize.define(
    'StripeProvider',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user_token: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        account_id: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(200),
            allowNull: true,
            defaultValue: null,
        },
        currency: {
            type: DataTypes.STRING(50),
            allowNull: true,
            defaultValue: '0',
        },
        response: {
            type: DataTypes.STRING(10000),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        update_on: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        }
    },
    {
        tableName: 'stripe_provider_table',
        timestamps: false,
        underscored: true,
    });

export default StripeProvider;
