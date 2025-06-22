import mongoose, { Schema, Document, Model } from 'mongoose';

export interface AdministratorDocument extends Document {
  email: string;
  password: string;
  normal_password: string;
  username: string;
  full_name: string;
  profile_img?: string | null;
  role: number;
  token?: string | null;
}

const administratorSchema: Schema<AdministratorDocument> = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 100,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: 150,
    },
    normal_password: {
      type: String,
      required: true,
      maxlength: 150,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      maxlength: 150,
      trim: true,
    },
    full_name: {
      type: String,
      required: true,
      maxlength: 150,
    },
    profile_img: {
      type: String,
      maxlength: 256,
      default: null,
    },
    role: {
      type: Number,
      default: 0,
    },
    token: {
      type: String,
      maxlength: 50,
      default: null,
    },
  },
  {
    collection: 'administrators',
    timestamps: false,
  }
);

// Optional: explicitly define indexes
administratorSchema.index({ email: 1 }, { unique: true });
administratorSchema.index({ username: 1 }, { unique: true });

export const Administrator: Model<AdministratorDocument> = mongoose.model<AdministratorDocument>(
  'Administrator',
  administratorSchema
);
