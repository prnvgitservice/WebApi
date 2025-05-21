import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Pages = sequelize.define(
  "Pages",
  {
    p_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    page_key: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    page_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  {
    tableName: "pages",
    timestamps: false,
  }
);

export default Pages;
