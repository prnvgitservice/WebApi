import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PromoCode = sequelize.define(
  "PromoCode",
  {
    promId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subscription_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    promo_code: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    from_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    to_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    minimum_amount: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    deducted_amount: {
      type: DataTypes.STRING(100),
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
    use_code_status: {
      type: DataTypes.ENUM("Not Used", "Used"),
      allowNull: false,
    },
    ppromoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "promo_codes",
    timestamps: false,
  }
);

export default PromoCode;
