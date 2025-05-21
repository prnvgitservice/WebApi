import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const FooterSubmenuLang = sequelize.define(
  "FooterSubmenuLang",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    modules: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    lang_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
  },
  {
    tableName: "footer_submenu_lang",
    timestamps: false,
  }
);

export default FooterSubmenuLang;
