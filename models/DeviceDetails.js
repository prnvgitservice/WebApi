import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const DeviceDetails = sequelize.define(
  "DeviceDetails",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    device_type: {
      type: DataTypes.BLOB("tiny"), // varbinary(10) maps to tiny BLOB
      allowNull: false,
    },
    device_id: {
      type: DataTypes.TEXT("tiny"), // tinytext
      allowNull: false,
      collate: "latin1_swedish_ci",
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1-provider, 2-user",
    },
  },
  {
    tableName: "device_details",
    timestamps: false,
  }
);

export default DeviceDetails;
