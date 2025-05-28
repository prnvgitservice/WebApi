import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ViewGetAllAreasPincodes = sequelize.define(
  'ViewGetAllAreasPincodes',
  {
    Ar_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
      type: DataTypes.INTEGER,  
      allowNull: true,
    },
    Pnc_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'view_getallareas_pincodes',
    timestamps: false,
    underscored: false,
    freezeTableName: true,   
  }
);

export default ViewGetAllAreasPincodes;
