import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AdvSubscriptionDetails = sequelize.define(
  "AdvSubscriptionDetails",
  {
    usId: {
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
    proof: {
      type: DataTypes.TEXT,
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
    added_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false, // 1-provider, 2-user, 3-bda
    },
    paid_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "adv_subscription_details",
    timestamps: false, // Using manual date fields
  }
);

export default AdvSubscriptionDetails;
