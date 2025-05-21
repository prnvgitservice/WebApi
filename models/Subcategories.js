import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Subcategory = sequelize.define(
    'Subcategory',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        category: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        subcategory_name: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        subcategory_slug: {
            type: DataTypes.STRING(250),
            allowNull: false,
        },
        subcategory_image: {
            type: DataTypes.STRING(500),
            allowNull: true,
            defaultValue: null,
        },
        status: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
        updated_on: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        }
    },
    {
        tableName: 'subcategories',
        timestamps: false,
        underscored: true,
    });

export default Subcategory;
