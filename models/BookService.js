import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";  

const BookService = sequelize.define(
  "BookService",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    provider_id: {
      type: DataTypes.STRING(255), // Using STRING for provider_id
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    service_date: {
      type: DataTypes.DATEONLY, // Using DATEONLY for date
      allowNull: false,
    },
    amount: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    user_amount: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    currency_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    tokenid: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    from_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    to_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cod: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null, // Nullable
    },
    latitude: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    request_date: {
      type: DataTypes.DATEONLY, // Using DATEONLY for date
      allowNull: false,
    },
    request_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    service_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // Default status
    },
    notification_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // Default notification status
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // Default status
    },
    reason: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    admin_change_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0, // Default admin change status
    },
    reject_paid_token: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    admin_reject_comment: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    payment_details: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    admin_update_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0, // Default admin update status
    },
    updated_on: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW, // Current timestamp
    },
    delete_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // Default delete status
    },
    promo_status: {
      type: DataTypes.ENUM('No', 'Yes'),
      allowNull: false,
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    order_type: {
      type: DataTypes.ENUM('1', '2'), // 1-online, 2-call
      allowNull: false,
    },
  },
  {
    tableName: "book_service",
    timestamps: false, // Disable automatic timestamps since we are using custom fields
  }
);

export default BookService;
