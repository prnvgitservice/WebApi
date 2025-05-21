import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AdminAccess = sequelize.define(
  "AdminModuleAccess",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    module_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    access: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  {
    tableName: "admin_access",
    timestamps: false,
  }
);

export default AdminAccess;
