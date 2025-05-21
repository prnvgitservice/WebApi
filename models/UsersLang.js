import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const UsersLang = sequelize.define(
    'UsersLang',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        lang_type: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        modules: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        tableName: 'users_lang',
        timestamps: false,
        underscored: true,
    });

export default UsersLang;
