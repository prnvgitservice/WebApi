import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const ContentImage = sequelize.define(
  "ContentImage",
  {
    image_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    image_name: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    content_img: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
  },
  {
    tableName: "content_image",
    timestamps: false,
  }
);

export default ContentImage;
