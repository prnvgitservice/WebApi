import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ServicesImage = sequelize.define(
    'ServicesImage',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        service_id: {
            type: DataTypes.STRING(11),
            allowNull: false,
            collate: 'latin1_swedish_ci',
        },
        service_image: {
            type: DataTypes.TEXT,
            allowNull: false,
            collate: 'latin1_swedish_ci',
        },
        service_details_image: {
            type: DataTypes.TEXT,
            allowNull: false,
            collate: 'latin1_swedish_ci',
        },
        thumb_image: {
            type: DataTypes.TEXT,
            allowNull: false,
            collate: 'latin1_swedish_ci',
        },
        mobile_image: {
            type: DataTypes.TEXT,
            allowNull: false,
            collate: 'latin1_swedish_ci',
        },
        status: {
            type: DataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: 1,
        },
        is_url: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            defaultValue: 1,
        },
    },
    {
        tableName: 'services_image',
        timestamps: false,
        underscored: true,
    });

export default ServicesImage;
