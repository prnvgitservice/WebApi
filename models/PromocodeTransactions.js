import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PromocodeTransaction = sequelize.define(
  "PromocodeTransaction",
  {
    ptransId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    promoid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    providerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deductedAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookServiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    added_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    booking_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // 1 = pending, 2 = cancel
      validate: {
        isIn: [[1, 2]],
      },
    },
  },
  {
    tableName: "promocode_transactions",
    timestamps: false,
  }
);

export default PromocodeTransaction;
