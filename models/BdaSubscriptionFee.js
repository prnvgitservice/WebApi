import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const BdaSubscriptionFee = sequelize.define(
  "BdaSubscriptionFee",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subscription_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    fee: {
      type: DataTypes.DOUBLE(10, 2),
      allowNull: false,
    },
    actual_before_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    currency_code: {
      type: DataTypes.CHAR(5),
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Duration in months",
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0-inactive,1-active",
    },
    Has_Referral_Bonus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Plan_Description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    offer_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    special_before_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    offer_amount_per: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "bda_subscription_fee",
    timestamps: false,
  }
);

export default BdaSubscriptionFee;
