import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const SystemSettings = sequelize.define(
    'SystemSettings',
    {
        id: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        key: {
            type: DataTypes.STRING(250),
            allowNull: false,
        },
        value: {
            type: DataTypes.STRING(250),
            allowNull: false,
        },
        system: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 1,
        },
        groups: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        update_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        status: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 1,
        },
    },
    {
        tableName: 'system_settings',
        timestamps: false,
        underscored: true,
    });

export default SystemSettings;
