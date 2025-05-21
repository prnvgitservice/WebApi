import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Wallet = sequelize.define(
    'Wallet',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        token: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        currency_code: {
            type: DataTypes.STRING(25),
            allowNull: true,
        },
        user_provider_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        wallet_amt: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        reason: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        updated_on: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        tableName: 'wallet_table',
        timestamps: false,
        underscored: true,
    });

export default Wallet;
