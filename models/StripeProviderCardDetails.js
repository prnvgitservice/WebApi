import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const StripeProviderCardDetails = sequelize.define(
    'StripeProviderCardDetails',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user_token: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        stripe_token: {
            type: DataTypes.STRING(600),
            allowNull: false,
        },
        pay_type: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        cvc_check: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        account_id: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        card_id: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        card_number: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        card_exp_month: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        card_exp_year: {
            type: DataTypes.STRING(5),
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_on: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
    },
    {
        tableName: 'stripe_provider_card_details',
        timestamps: false,
        underscored: true,
    });

export default StripeProviderCardDetails;
