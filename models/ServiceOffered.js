import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ServiceOffered = sequelize.define(
    'ServiceOffered',
    {
        service_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        service_offered: {
            type: DataTypes.TEXT,
            allowNull: false,
            // Note: Sequelize does not directly support collation in model definition,
            // collation is generally set at DB level or via raw queries.
        },
    },
    {
        tableName: 'service_offered',
        timestamps: false,
        underscored: true,
    });

export default ServiceOffered;
