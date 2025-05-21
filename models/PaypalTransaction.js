import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PaypalTransaction = sequelize.define(
  "PaypalTransaction",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transaction_id: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "latin1_swedish_ci",
    },
    order_id: {
      type: DataTypes.STRING(250),
      allowNull: false,
      collate: "latin1_swedish_ci",
    },
    amount: {
      type: DataTypes.STRING(50),
      allowNull: true,
      collate: "latin1_swedish_ci",
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    tableName: "paypal_transaction",
    timestamps: false,
  }
);

export default PaypalTransaction;
