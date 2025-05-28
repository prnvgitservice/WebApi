import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AdvGallery = sequelize.define(
  "AdvGallery",
  {
    agId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_type: {
      type: DataTypes.INTEGER,
      allowNull: false, // 1 = provider, 2 = user, 3 = bda
    },
    gallary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "approved", "rejected"),
      allowNull: false,
    },
    deleted: {
      type: DataTypes.ENUM("0", "1"), // 0 = not deleted, 1 = deleted
      allowNull: false,
    },
    added_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rejected_reason: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "adv_gallery",
    timestamps: false, 
  }
);

export default AdvGallery;
