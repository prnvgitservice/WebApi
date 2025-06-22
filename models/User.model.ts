import mongoose, { Document, Schema, Model } from 'mongoose';

export interface UserDocument extends Document {
  name: string;
  mobileno: string;
  password?: string;
  aadhar_number: string;
  country_code: string;
  currency_code?: string;
  otp: string;
  share_code?: string;
  email: string;
  profile_img?: string;
  dob?: Date;
  token: string;
  status: number;
  pwd: string;
  usertype: number;
  type: number;
  account_holder_name: string;
  account_number: string;
  account_iban: string;
  bank_name: string;
  bank_address: string;
  sort_code: string;
  referral_earn?: number;
  routing_number: string;
  account_ifsc: string;
  last_login: Date;
  created_at: Date;
  updated_at: Date;
  is_agree?: number;
  language: string;
  last_logout: Date;
}

const UserSchema: Schema<UserDocument> = new Schema(
  {
    name: { type: String, required: true },
    mobileno: { type: String, required: true },
    password: { type: String },
    aadhar_number: { type: String, required: true, maxlength: 12 },
    country_code: { type: String, required: true, maxlength: 11 },
    currency_code: { type: String },
    otp: { type: String, required: true },
    share_code: { type: String, maxlength: 20 },
    email: { type: String, required: true, unique: true },
    profile_img: { type: String },
    dob: { type: Date },
    token: { type: String, required: true },
    status: { type: Number, default: 1 },
    pwd: { type: String, required: true },
    usertype: { type: Number, required: true },
    type: { type: Number, required: true },
    account_holder_name: { type: String, required: true },
    account_number: { type: String, required: true },
    account_iban: { type: String, required: true },
    bank_name: { type: String, required: true },
    bank_address: { type: String, required: true },
    sort_code: { type: String, required: true },
    referral_earn: { type: Number },
    routing_number: { type: String, required: true },
    account_ifsc: { type: String, required: true },
    last_login: { type: Date, required: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
    is_agree: { type: Number },
    language: { type: String, required: true },
    last_logout: { type: Date, default: Date.now },
  },
  {
    collection: 'users',
    timestamps: false,
  }
);

export const User: Model<UserDocument> = mongoose.model<UserDocument>('User', UserSchema);
