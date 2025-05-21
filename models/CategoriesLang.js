import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const CategoriesLang = sequelize.define(
  "CategoriesLang",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    lang_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "categories_lang",
    timestamps: false,
  }
);

export default CategoriesLang;
