import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ThemeColorChange = sequelize.define(
    'ThemeColorChange',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        color_name: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('1', '0'),
            allowNull: false,
            defaultValue: '0',
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'theme_color_change',
        timestamps: false,
        underscored: true,
        hooks: {
            beforeUpdate: (themeColor) => {
                themeColor.updated_at = new Date();
            }
        }
    });

export default ThemeColorChange;
