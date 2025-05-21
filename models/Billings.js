import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Billing = sequelize.define(
  "Billing",
  {
    b_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    b_uid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    b_pid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    b_date: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    b_due_date: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    b_time: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    b_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    b_discount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    b_other_charges: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    b_total_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    b_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    b_generated_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    b_updated_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "billings",
    timestamps: false,
    hooks: {
      beforeUpdate: (billing) => {
        billing.b_updated_date = new Date();
      },
    },
  }
);

export default Billing;
