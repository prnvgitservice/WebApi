import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const StripeBankDetails = sequelize.define(
    'StripeBankDetails',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        account_holder_name: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        account_number: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        account_iban: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        bank_name: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        bank_address: {
            type: DataTypes.STRING(256),
            allowNull: false,
        },
        sort_code: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        routing_number: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        account_ifsc: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        paypal_account: {
            type: DataTypes.STRING(50),
            allowNull: true,
            defaultValue: null,
        },
        paypal_email_id: {
            type: DataTypes.STRING(50),
            allowNull: true,
            defaultValue: null,
        },
        pancard_no: {
            type: DataTypes.STRING(50),
            allowNull: true,
            defaultValue: null,
        },
    },
    {
        tableName: 'stripe_bank_details',
        timestamps: false,
        underscored: true,
    });

export default StripeBankDetails;
