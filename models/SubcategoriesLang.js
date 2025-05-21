import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const SubcategoryLang = sequelize.define(
    'SubcategoryLang',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        subcategory_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        subcategory_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        lang_type: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    },
    {
        tableName: 'subcategories_lang',
        timestamps: false,
        underscored: true,
    });

export default SubcategoryLang;
