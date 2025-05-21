import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const BillItem = sequelize.define(
  "BillItem",
  {
    bi_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    bi_bid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bi_service: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    bi_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bi_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    bi_total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    bi_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    bi_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    bi_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "bill_items",
    timestamps: false,
    hooks: {
      beforeUpdate: (billItem) => {
        billItem.bi_updated = new Date();
      },
    },
  }
);

export default BillItem;
