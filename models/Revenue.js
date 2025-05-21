import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Revenue = sequelize.define(
    'Revenue',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: true,  // since it's nullable in your schema
        },
        provider: {
            type: DataTypes.STRING(50),
            allowNull: false,
            collate: 'utf8mb4_general_ci',
        },
        user: {
            type: DataTypes.STRING(50),
            allowNull: false,
            collate: 'utf8mb4_general_ci',
        },
        amount: {
            type: DataTypes.STRING(25),
            allowNull: false,
            collate: 'utf8mb4_general_ci',
        },
        currency_code: {
            type: DataTypes.STRING(5),
            allowNull: false,
            collate: 'utf8mb4_general_ci',
        },
        commission: {
            type: DataTypes.STRING(5),
            allowNull: false,
            collate: 'utf8mb4_general_ci',
        },
        status: {
            type: DataTypes.STRING(1),
            allowNull: false,
            defaultValue: '1',
            collate: 'utf8mb4_general_ci',
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
        tableName: 'revenue',
        timestamps: false,
        underscored: true,
    });

export default Revenue;
