import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const FAQ = sequelize.define(
  "FAQ",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    page_title: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    page_content: {
      type: DataTypes.TEXT,
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    created_datetime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_datetime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "faq",
    timestamps: false,
  }
);

export default FAQ;
