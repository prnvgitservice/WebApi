import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const FranchiseTermsConditions = sequelize.define(
  "FranchiseTermsConditions",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    rules: {
      type: DataTypes.TEXT,
      allowNull: false,
      collate: "utf8mb4_general_ci",
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
    tableName: "franchise_terms_conditions",
    timestamps: false,
  }
);

export default FranchiseTermsConditions;
