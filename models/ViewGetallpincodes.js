import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ViewGetAllPincodes = sequelize.define(
    'ViewGetAllPincodes',
    {
        Pnc_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            primaryKey: true,
        },
        Pnc_aliasname: {
            type: DataTypes.STRING(120),
            allowNull: true,
        },
        Pnc_Code: {
            type: DataTypes.INTEGER(6),
            allowNull: true,
        },
        City: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    },
    {
        tableName: 'view_getallpincodes',
        timestamps: false,
        underscored: true,
    });

export default ViewGetAllPincodes;
