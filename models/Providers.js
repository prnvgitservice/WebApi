import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Provider = sequelize.define(
  "Provider",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    joined_bda: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    mobileno: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    country_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    currency_code: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    share_code: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subcategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profile_img: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    otp: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    account_holder_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    account_number: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    account_iban: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    bank_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    bank_address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    sort_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    routing_number: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    account_ifsc: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    referred_by: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    team_limit: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    video_link: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    referral_earn: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // 1-active, 2-inactive, 0-delete
    },
    pwd: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    delete_status: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "0", // 1-delete, 0-not delete
    },
    usertype: {
      type: DataTypes.STRING(1),
      allowNull: false, // 1-existing user, 2-new user
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    last_logout: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_agree: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    is_online: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 2,
    },
    language: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    is_available: {
      type: DataTypes.ENUM("1", "2"),
      allowNull: false,
    },
    about_me: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    gst: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    total_views: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bda_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    purpose: {
      type: DataTypes.ENUM("1", "2"), // 1-provider, 2-test provider
      allowNull: false,
    },
    offer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    response_time: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    tableName: "providers",
    timestamps: false,
  }
);

export default Provider;
