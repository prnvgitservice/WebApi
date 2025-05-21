import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const WalletPromocodeHistory = sequelize.define(
    'WalletPromocodeHistory',
    {
        wphId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        bookingId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        providerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        promos_amount: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        added_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: 'wallet_promocode_history',
        timestamps: false,
        underscored: true,
    });

export default WalletPromocodeHistory;
