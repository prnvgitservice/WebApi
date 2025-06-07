import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Service = sequelize.define(
    'Service',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        service_title: {
            type: DataTypes.STRING(500),
            allowNull: false,
            collate: 'utf8mb3_unicode_ci',
        },
        currency_code: {
            type: DataTypes.STRING(25),
            allowNull: true,
            collate: 'latin1_swedish_ci',
        },
        service_sub_title: {
            type: DataTypes.STRING(500),
            allowNull: true,
            collate: 'utf8mb3_unicode_ci',
        },
        service_amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING(500),
            allowNull: false,
            collate: 'latin1_swedish_ci',
        },
        subcategory: {
            type: DataTypes.STRING(500),
            allowNull: false,
            collate: 'latin1_swedish_ci',
        },
        about: {
            type: DataTypes.TEXT,
            allowNull: false,
            collate: 'utf8mb3_unicode_ci',
        },
        service_offered: {
            type: DataTypes.TEXT,
            allowNull: false,
            collate: 'utf8mb3_unicode_ci',
        },
        service_location: {
            type: DataTypes.STRING(500),
            allowNull: true,
            collate: 'utf8mb3_general_ci',
        },
        service_latitude: {
            type: DataTypes.STRING(500),
            allowNull: false,
            collate: 'latin1_swedish_ci',
        },
        service_longitude: {
            type: DataTypes.STRING(500),
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
            allowNull: true,
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
        url: {
            type: DataTypes.STRING(250),
            allowNull: false,
            collate: 'latin1_swedish_ci',
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1, // 0-delete, 1-active, 2-inactive
        },
        total_views: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING(255),
            allowNull: false,
            collate: 'latin1_swedish_ci',
        },
        rating_count: {
            type: DataTypes.STRING(255),
            allowNull: false,
            collate: 'latin1_swedish_ci',
        },
        admin_verification: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        deleted_reason: {
            type: DataTypes.TEXT,
            allowNull: false,
            collate: 'latin1_swedish_ci',
        },
        service_country: {
            type: DataTypes.STRING(255),
            allowNull: false,
            collate: 'latin1_swedish_ci',
        },
        service_state: {
            type: DataTypes.STRING(255),
            allowNull: false,
            collate: 'latin1_swedish_ci',
        },
        service_city: {
            type: DataTypes.STRING(255),
            allowNull: false,
            collate: 'latin1_swedish_ci',
        },
        AccessTo_AllPincodes: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            field: 'AccessTo_AllPincodes',
        },
        meta_title: {
            type: DataTypes.STRING(250),
            allowNull: true,
            collate: 'latin1_swedish_ci',
        },
        meta_description: {
            type: DataTypes.TEXT,
            allowNull: true,
            collate: 'latin1_swedish_ci',
        },
        meta_keywords: {
            type: DataTypes.STRING(500),
            allowNull: true,
            collate: 'latin1_swedish_ci',
        },
        created_by: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: 'provider',
            collate: 'latin1_swedish_ci',
        },
    },
    {
        tableName: 'services',
        timestamps: false,
        underscored: true,
    });

export default Service;
