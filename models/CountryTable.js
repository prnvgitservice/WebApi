import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const CountryTable = sequelize.define(
  "CountryTable",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    country_code: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    country_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    tcode: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_on: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "country_table",
    timestamps: false,
  }
);

export default CountryTable;
