import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";  

const BookServiceCod = sequelize.define(
  "BookServiceCod",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    review_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // 0->unpaid, 1->paid
    },
    created_on: {
      type: DataTypes.DATEONLY, // Using DATEONLY for date
      allowNull: false,
    },
  },
  {
    tableName: "book_service_cod",
    timestamps: false, // Disable automatic timestamps since we are using custom fields
  }
);

export default BookServiceCod;
