import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AdvSubscriptionPayment = sequelize.define(
  "AdvSubscriptionPayment",
  {
    aspId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sub_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subscription_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subscriber_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subscription_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    tokenid: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    payment_details: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    paytype: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    upload_doc: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "adv_subscription_payment",
    timestamps: false,
  }
);

export default AdvSubscriptionPayment;
