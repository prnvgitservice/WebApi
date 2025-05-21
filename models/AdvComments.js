import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AdvComment = sequelize.define(
  "AdvComment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    adv_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("1", "2", "3"), // 1 = Pending, 2 = Accepted, 3 = Rejected
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
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "adv_comments",
    timestamps: false, // Disable Sequelize's automatic timestamps
  }
);

export default AdvComment;
