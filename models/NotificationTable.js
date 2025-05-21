import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const NotificationTable = sequelize.define(
  "NotificationTable",
  {
    notification_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    sender: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: "latin1_swedish_ci",
    },
    receiver: {
      type: DataTypes.STRING(100),
      allowNull: false,
      collate: "latin1_swedish_ci",
    },
    message: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      collate: "latin1_swedish_ci",
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    utc_date_time: {
      type: DataTypes.STRING(50),
      allowNull: true,
      collate: "latin1_swedish_ci",
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_on: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    delete_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "notification_table",
    timestamps: false,
  }
);

export default NotificationTable;
