import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const OfflinePayment = sequelize.define(
  "OfflinePayment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    bank_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    holder_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    account_num: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    ifsc_code: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    branch_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    upi_id: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "utf8mb4_general_ci",
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    created_datetime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_datetime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "offline_payment",
    timestamps: false,
  }
);

export default OfflinePayment;
