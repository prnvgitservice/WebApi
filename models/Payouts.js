import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Payout = sequelize.define(
  "Payout",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    payout_method: {
      type: DataTypes.STRING(100),
      allowNull: true,
      collate: "utf8mb3_general_ci",
    },
    amount: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING(20),
      allowNull: true,
      collate: "utf8mb3_general_ci",
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
    },
    created_datetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "payouts",
    timestamps: false,
  }
);

export default Payout;
