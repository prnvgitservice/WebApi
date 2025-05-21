import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PrnvServiceproviderPincodeLinkup = sequelize.define(
  "PrnvServiceproviderPincodeLinkup",
  {
    Sp_Pin_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Sp_Pin_ServiceProvider_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Sp_Pin_Pincode_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Sp_Pin_ModifiedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    tableName: "prnv_serviceprovider_pincode_linkup",
    timestamps: false,
  }
);

export default PrnvServiceproviderPincodeLinkup;
