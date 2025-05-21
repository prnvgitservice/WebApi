import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const CountryCode = sequelize.define(
  "CountryCode",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    CountryCode: {
      type: DataTypes.CHAR(5),
      allowNull: false,
    },
    CountryName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "countrycode",
    timestamps: false,
  }
);

export default CountryCode;
