import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const SeoContentDetails = sequelize.define(
    "SeoContentDetails",
    {
    contentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price_chart: {
      type: DataTypes.TEXT('long'), 
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    added_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, 
  {
    tableName: 'seo_content_details', 
    timestamps: false, 
  }
);


export default SeoContentDetails;

