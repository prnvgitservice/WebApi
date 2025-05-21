import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PrnvPaidTable = sequelize.define(
  "PrnvPaidTable",
  {
    pptId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    added_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
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
  },
  {
    tableName: "prnv_paid_table",
    timestamps: false,
  }
);

export default PrnvPaidTable;
