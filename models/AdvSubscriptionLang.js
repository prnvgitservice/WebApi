import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AdvSubscriptionLang = sequelize.define(
  "AdvSubscriptionLang",
  {
    asl_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sub_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subscription_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    lang_type: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    tableName: "adv_subscription_lang",
    timestamps: false,
  }
);

export default AdvSubscriptionLang;
