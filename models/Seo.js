import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Seo = sequelize.define(
    'Seo',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        meta_title: {
            type: DataTypes.STRING(255),
            allowNull: false,
            collate: 'utf8mb4_general_ci',
        },
        meta_keyword: {
            type: DataTypes.STRING(255),
            allowNull: false,
            collate: 'utf8mb4_general_ci',
        },
        meta_desc: {
            type: DataTypes.TEXT,
            allowNull: false,
            collate: 'utf8mb4_general_ci',
        },
        lang_type: {
            type: DataTypes.STRING(255),
            allowNull: false,
            collate: 'utf8mb4_general_ci',
        },
        modules: {
            type: DataTypes.STRING(255),
            allowNull: false,
            collate: 'utf8mb4_general_ci',
        },
    },
    {
        tableName: 'seo',
        timestamps: false,
        underscored: true,
    });

export default Seo;
