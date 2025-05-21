import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const WalletWithdraw = sequelize.define(
    'WalletWithdraw',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        amount: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        currency_code: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        request_payment: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        transaction_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        transaction_status: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        status: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        created_by: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'wallet_withdraw',
        timestamps: false,
        underscored: true,
        hooks: {
            beforeUpdate: (walletWithdraw) => {
                walletWithdraw.updated_at = new Date();
            }
        }
    });

export default WalletWithdraw;
