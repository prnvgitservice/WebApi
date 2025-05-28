import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AdvPosts = sequelize.define(
  "AdvPosts",
  {
    advPId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    adv_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    adv_desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    adv_image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_type: {
      type: DataTypes.INTEGER,
      allowNull: false, // 1-provider, 2-user, 3-bda
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false, // 1-inactive, 2-active
    },
    added_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    adv_slug: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    adv_price: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    adv_address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "adv_posts",
    timestamps: false, // Using custom date columns instead of Sequelize timestamps
  }
);

export default AdvPosts;
