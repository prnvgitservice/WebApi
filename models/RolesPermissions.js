import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // adjust path as needed

const RolesPermissions = sequelize.define(
    'RolesPermissions',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        permission_modules: {
            type: DataTypes.TEXT,
            allowNull: false,
            collate: 'utf8mb3_general_ci',
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_datetime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_datetime: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        tableName: 'roles_permissions',
        timestamps: false,
        underscored: true,
    });

export default RolesPermissions;
