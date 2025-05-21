import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AdminModule = sequelize.define(
  "AdminModule",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    module_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    parent: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    module_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  {
    tableName: "admin_modules",
    timestamps: false,
  }
);

export default AdminModule;
