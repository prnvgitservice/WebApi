import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";  

const BlockUserProvider = sequelize.define(
  "BlockUserProvider",
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
      defaultValue: 1, // by provider
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
    tableName: "block_user_provider",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default BlockUserProvider;
