import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const City = sequelize.define(
  "City",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // 1 = active
    },
  },
  {
    tableName: "city",
    timestamps: false,
  }
);

export default City;
