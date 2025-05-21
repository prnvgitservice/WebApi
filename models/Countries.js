import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Countries = sequelize.define(
  "Countries",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    dial_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    code: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    created_datetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "countries",
    timestamps: false,
  }
);

export default Countries;
