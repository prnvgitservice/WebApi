import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const ChatTable = sequelize.define(
  "ChatTable",
  {
    chat_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    sender_token: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    receiver_token: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING(10000),
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // 1 => active, 0 => de-active
    },
    read_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // 0 => unread, 1 => read
    },
    utc_date_time: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "chat_table",
    timestamps: false,
  }
);

export default ChatTable;
