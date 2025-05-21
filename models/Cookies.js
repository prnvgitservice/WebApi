import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Cookies = sequelize.define(
  "Cookies",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cookie_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    lang_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    modules: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "cookies",
    timestamps: false,
  }
);

export default Cookies;
