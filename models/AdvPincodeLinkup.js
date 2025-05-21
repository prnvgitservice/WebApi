import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AdvPincodeLinkup = sequelize.define(
  "AdvPincodeLinkup",
  {
    aplId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pincode_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_type: {
      type: DataTypes.INTEGER,
      allowNull: false, // 1 = provider, 2 = user, 3 = bda
    },
  },
  {
    tableName: "adv_pincode_linkup",
    timestamps: false, // No timestamps fields given
  }
);

export default AdvPincodeLinkup;
