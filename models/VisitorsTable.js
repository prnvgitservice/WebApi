import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const VisitorsTable = sequelize.define(
    'VisitorsTable',
    {
        v_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        v_provider_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        v_ip: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        v_device: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        v_date_time: {
            type: DataTypes.DATEONLY, // DATE in MySQL corresponds to DATEONLY in Sequelize
            allowNull: false,
        },
        added_date: {
            type: DataTypes.DATE, // DATETIME in MySQL
            allowNull: false,
        },
    },
    {
        tableName: 'visitors_table',
        timestamps: false,
        underscored: true,
    });

export default VisitorsTable;
