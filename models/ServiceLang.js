import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ServiceLang = sequelize.define(
    'ServiceLang',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        service_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        service_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            collate: 'utf8mb4_general_ci',
        },
        lang_type: {
            type: DataTypes.STRING(255),
            allowNull: false,
            collate: 'utf8mb4_general_ci',
        },
    },
    {
        tableName: 'service_lang',
        timestamps: false,
        underscored: true,
    });

export default ServiceLang;
