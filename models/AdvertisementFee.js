import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AdvertisementFee = sequelize.define(
  "AdvertisementFee",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    advertisement_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
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
      type: DataTypes.BOOLEAN,
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
      comment: "0-inactive, 1-active",
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
    tableName: "advertisement_fee",
    timestamps: false,
  }
);

export default AdvertisementFee;
