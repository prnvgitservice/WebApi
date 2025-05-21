import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ServiceProviderTeam = sequelize.define(
    'ServiceProviderTeam',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        member_name: {
            type: DataTypes.STRING(250),
            allowNull: false,
        },
        mobile: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        profile_pic: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: 'active',
        },
        provider_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        remarks: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'service_provider_team',
        timestamps: false,
        underscored: true,
    });

export default ServiceProviderTeam;
