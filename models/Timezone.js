import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Timezone = sequelize.define(
    'Timezone',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        timezone_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        value: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        tableName: 'timezone',
        timestamps: false,
        underscored: true,
    });

export default Timezone;
