import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const RolesPermissionsLang = sequelize.define(
    'RolesPermissionsLang',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        role_name: {
            type: DataTypes.STRING(250),
            allowNull: false,
            collate: 'utf8mb3_general_ci',
        },
        lang_type: {
            type: DataTypes.STRING(50),
            allowNull: false,
            collate: 'utf8mb3_general_ci',
        },
    },
    {
        tableName: 'roles_permissions_lang',
        timestamps: false,
        underscored: true,
    });

export default RolesPermissionsLang;
