import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PrnvServiceAreas = sequelize.define(
  "PrnvServiceAreas",
  {
    sa_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    sa_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    sa_name_slug: {
      type: DataTypes.STRING(200),
      allowNull: false,
      // You can add a unique constraint here if needed
      // unique: true,
    },
    sa_meta_title: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    sa_meta_description: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    sa_keywords: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    sa_socialmediasharing: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    sa_status: {
      type: DataTypes.ENUM("active", "inactive"),
      allowNull: false,
      defaultValue: "active",
    },
    sa_created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    sa_updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "prnv_service_areas",
    timestamps: false,
  }
);

export default PrnvServiceAreas;
