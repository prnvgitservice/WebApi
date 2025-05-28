import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const UserAddress = sequelize.define(
    'UserAddress',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING(250),
            allowNull: true,
        },
        country_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        state_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        city_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        pincode: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        updated_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: 'user_address',
        timestamps: false,
        underscored: true,
    });

export default UserAddress;
