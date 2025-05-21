import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // adjust path as needed

const UserFavorite = sequelize.define(
    'UserFavorite',
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
        provider_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        service_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'user_favorite',
        timestamps: false,
        underscored: true,
    });

export default UserFavorite;
