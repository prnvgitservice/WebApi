import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mobileno: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(250),
            allowNull: true,
        },
        country_code: {
            type: DataTypes.STRING(11),
            allowNull: false,
        },
        currency_code: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        otp: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        share_code: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        profile_img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dob: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        pwd: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        usertype: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        account_holder_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        account_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        account_iban: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bank_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bank_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sort_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        referral_earn: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        routing_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        account_ifsc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_login: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        is_agree: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        language: {
            type: DataTypes.STRING(250),
            allowNull: false,
        },
        last_logout: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
    },
    {
        tableName: 'users',
        timestamps: false,
    }
);

export default User;