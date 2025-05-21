import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const CurrencyRate = sequelize.define(
  "CurrencyRate",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    currency_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "latin1_swedish_ci",
    },
    currency_symbol: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    currency_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      collate: "latin1_swedish_ci",
    },
    rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    delete_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    tableName: "currency_rate",
    timestamps: false,
  }
);

export default CurrencyRate;
