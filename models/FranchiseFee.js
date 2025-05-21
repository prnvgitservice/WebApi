import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const FranchiseFee = sequelize.define(
  "FranchiseFee",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    advertisement_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      collate: "utf8mb3_unicode_ci",
    },
    fee: {
      type: DataTypes.DOUBLE(10, 2),
      allowNull: false,
    },
    fee_before: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    offer_amount_before: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    Has_Special: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    currency_code: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      collate: "latin1_swedish_ci",
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Duration in months",
    },
    fee_description: {
      type: DataTypes.TEXT("tiny"),
      allowNull: false,
      collate: "latin1_swedish_ci",
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0-inactive,1-active",
    },
    subsc_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
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
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    Has_Best_Work_Videos_Youtube: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    Has_SocialMedia_Promotion: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    Has_Homepage_Promotion: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    Plan_Description: {
      type: DataTypes.TEXT,
      allowNull: false,
      collate: "latin1_swedish_ci",
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
    tableName: "franchise_fee",
    timestamps: false,
  }
);

export default FranchiseFee;
