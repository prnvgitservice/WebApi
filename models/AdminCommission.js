import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AdminCommission = sequelize.define(
  "AdminCommission",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    admin_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    commission: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("1", "0"),
      allowNull: false,
      defaultValue: "1",
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
  },
  {
    tableName: "admin_commission",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default AdminCommission;
