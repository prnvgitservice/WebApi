import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const BdaWallet = sequelize.define(
  "BdaWallet",
  {
    bdawalletId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bda_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
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
    bdaSubId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
    },
  },
  {
    tableName: "bda_wallet",
    timestamps: false,
  }
);

export default BdaWallet;
