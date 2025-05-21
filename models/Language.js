import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Language = sequelize.define(
  "Language",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING(150),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    language_value: {
      type: DataTypes.STRING(25),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    tag: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: "utf8mb3_general_ci",
    },
    default_language: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1-default",
    },
    status: {
      type: DataTypes.TINYINT(5),
      allowNull: false,
      defaultValue: 2, // 1 = active, 2 = inactive
    },
  },
  {
    tableName: "language",
    timestamps: false,
  }
);

export default Language;
