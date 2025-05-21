import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ViewGetAllAreasPincodes = sequelize.define(
    'ViewGetAllAreasPincodes',
    {
        Ar_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            primaryKey: true,
        },
        Ar_Name: {
            type: DataTypes.STRING(120),
            allowNull: true,
        },
        Pnc_aliasname: {
            type: DataTypes.STRING(120),
            allowNull: true,
        },
        Pnc_Code: {
            type: DataTypes.INTEGER(6),
            allowNull: true,
        },
        Pnc_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        }
    },
    {
        tableName: 'view_getallareas_pincodes',
        timestamps: false,
        underscored: true,
    });

export default ViewGetAllAreasPincodes;
