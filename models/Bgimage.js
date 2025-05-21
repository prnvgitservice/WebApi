import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const BgImage = sequelize.define(
  "BgImage",
  {
    bgimg_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false, // not specified as AUTO_INCREMENT
    },
    bgimg_for: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    upload_image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    cropped_img: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    banner_content: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    banner_sub_content: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    banner_settings: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    main_search: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    popular_search: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    popular_label: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    updated_datetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_datetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "bgimage",
    timestamps: false,
  }
);

export default BgImage;
