import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Currency = sequelize.define(
  "Currency",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    currency_code: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    currency_name: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    tableName: "currency",
    timestamps: false,
  }
);

export default Currency;
