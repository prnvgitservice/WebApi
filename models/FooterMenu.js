import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const FooterMenu = sequelize.define(
  "FooterMenu",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "footer_menu",
    timestamps: false,
  }
);

export default FooterMenu;
