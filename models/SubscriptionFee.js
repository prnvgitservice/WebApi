import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const SubcriptionFee = sequelize.define(
    'SubcriptionFee',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        subscription_name: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        fee: {
            type: DataTypes.DOUBLE(10, 2),
            allowNull: false,
        },
        fee_before: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        offer_amount_before: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        offer_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Has_Special: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        currency_code: {
            type: DataTypes.CHAR(5),
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: 'Duration in months',
        },
        fee_description: {
            type: DataTypes.TEXT('tiny'),
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '0-inactive, 1-active',
        },
        offer_amount_per: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        subsc_type: {
            type: DataTypes.ENUM('SO-1', 'SO-2', 'SO-3', 'SO-4', 'SO-5', 'SO-6'),
            allowNull: false,
        },
        Has_Minimum_Business: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        Has_Minimum_Business_Amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        Allowed_Pincodes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Allowed_Members: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Allowed_WorkImages: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Has_Referral_Bonus: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        Has_Best_Work_Videos_Youtube: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        Has_SocialMedia_Promotion: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        Has_Homepage_Promotion: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        Plan_Description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        promocode_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        offer_ends_on: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        billing_facility: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
    },
    {
        tableName: 'subcription_fee',
        timestamps: false,
        underscored: true,
    });

export default SubcriptionFee;
