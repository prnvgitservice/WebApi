import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AssociateFee = sequelize.define(
  "AssociateFee",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    plan_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    fee: {
      type: DataTypes.DOUBLE(10, 2),
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
    fee_description: {
      type: DataTypes.TEXT("tiny"),
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0-inactive,1-active",
    },
    Allowed_Pincodes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Allowed_Members: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Allowed_WorkImages: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Has_Referral_Bonus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Has_Best_Work_Videos_Youtube: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Has_SocialMedia_Promotion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Has_Homepage_Promotion: {
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
    offer_amount_per: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "associate_fee",
    timestamps: false,
  }
);

export default AssociateFee;
