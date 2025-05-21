import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const WalletTransactionHistory = sequelize.define(
    'WalletTransactionHistory',
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
            comment: 'user or provider token',
        },
        currency_code: {
            type: DataTypes.STRING(25),
            allowNull: true,
        },
        transaction_document: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        user_provider_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: 'user or provider ids',
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: 'provider 1, user 2',
        },
        tokenid: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        payment_detail: {
            type: DataTypes.STRING(10000),
            allowNull: false,
        },
        charge_id: {
            type: DataTypes.STRING(200),
            allowNull: true,
            defaultValue: '1',
        },
        transaction_id: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        reference_key: {
            type: DataTypes.STRING(250),
            allowNull: false,
        },
        exchange_rate: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0,
        },
        paid_status: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        cust_id: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        card_id: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        total_amt: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        fee_amt: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        net_amt: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        amount_refund: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0,
        },
        current_wallet: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        credit_wallet: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0,
        },
        debit_wallet: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0,
        },
        avail_wallet: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0,
        },
        reason: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        payment_type: {
            type: DataTypes.STRING(250),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        update_on: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        tableName: 'wallet_transaction_history',
        timestamps: false,
        underscored: true,
    });

export default WalletTransactionHistory;
