import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Views = sequelize.define(
    'Views',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        service_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'views',
        timestamps: false,
        underscored: true,
    });

export default Views;
