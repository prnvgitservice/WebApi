import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";  

const BlockedProviders = sequelize.define(
  "BlockedProviders",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    blocked_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    blocked_by_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    blocked_by_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2, // by user
    },
    blocked_reason: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0, // 0-unblock; 1-block; 2-request_to_block
    },
  },
  {
    tableName: "blocked_providers",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default BlockedProviders;
