import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const BdaSubscriptionDetails = sequelize.define(
  "BdaSubscriptionDetails",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    expiry_date_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1-provider, 2-user",
    },
    proof: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    paid_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    payment_done_on: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    Admin_Accepeted_Payment: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    sub_type: {
      type: DataTypes.ENUM("1", "2", "3"),
      allowNull: false,
      comment: "1-Paid, 2-Free, 3-Wallet Deduction",
    },
  },
  {
    tableName: "bda_subscription_details",
    timestamps: false,
  }
);

export default BdaSubscriptionDetails;
