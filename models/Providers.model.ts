import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ProviderDocument extends Document {
  joined_bda: string;
  name: string;
  username?: string;
  email: string;
  mobileno: string;
  password?: string;
  country_code: string;
  currency_code?: string;
  share_code?: string;
  category: number;
  subcategory: number;
  profile_img: string;
  token: string;
  dob?: Date;
  otp: string;
  account_holder_name: string;
  account_number: string;
  account_iban: string;
  bank_name: string;
  bank_address: string;
  sort_code: string;
  routing_number: string;
  account_ifsc: string;
  created_at: Date;
  referred_by?: string;
  team_limit?: number;
  video_link?: string;
  referral_earn?: number;
  updated_at: Date;
  status: number;
  pwd: string;
  delete_status: string;
  usertype: string;
  type: number;
  last_login: Date;
  last_logout?: Date;
  is_agree?: number;
  is_online?: number;
  language: string;
  is_available: '1' | '2';
  about_me: string;
  gst: string;
  total_views: number;
  bda_id: number;
  purpose: '1' | '2';
  offer: number;
  response_time: string;
}

const ProviderSchema: Schema<ProviderDocument> = new Schema(
  {
    joined_bda: { type: String, required: true, maxlength: 10 },
    name: { type: String, required: true, maxlength: 225 },
    username: { type: String, maxlength: 250 },
    email: { type: String, required: true, maxlength: 225 },
    mobileno: { type: String, required: true, maxlength: 225 },
    password: { type: String, maxlength: 250 },
    country_code: { type: String, required: true, maxlength: 255 },
    currency_code: { type: String, maxlength: 50 },
    share_code: { type: String, maxlength: 20 },
    category: { type: Number, required: true },
    subcategory: { type: Number, required: true },
    profile_img: { type: String, required: true },
    token: { type: String, required: true },
    dob: { type: Date },
    otp: { type: String, required: true },
    account_holder_name: { type: String, required: true },
    account_number: { type: String, required: true },
    account_iban: { type: String, required: true },
    bank_name: { type: String, required: true },
    bank_address: { type: String, required: true },
    sort_code: { type: String, required: true },
    routing_number: { type: String, required: true },
    account_ifsc: { type: String, required: true },
    created_at: { type: Date, required: true, default: Date.now },
    referred_by: { type: String },
    team_limit: { type: Number },
    video_link: { type: String },
    referral_earn: { type: Number },
    updated_at: { type: Date, required: true, default: Date.now },
    status: { type: Number, required: true, default: 1 },
    pwd: { type: String, required: true },
    delete_status: { type: String, required: true, enum: ['0', '1'], default: '0' },
    usertype: { type: String, required: true, enum: ['1', '2'] },
    type: { type: Number, required: true, default: 1 },
    last_login: { type: Date, required: true },
    last_logout: { type: Date },
    is_agree: { type: Number },
    is_online: { type: Number, default: 2 },
    language: { type: String, required: true },
    is_available: { type: String, required: true, enum: ['1', '2'] },
    about_me: { type: String, required: true },
    gst: { type: String, required: true },
    total_views: { type: Number, required: true },
    bda_id: { type: Number, required: true },
    purpose: { type: String, required: true, enum: ['1', '2'] },
    offer: { type: Number, required: true },
    response_time: { type: String, required: true, maxlength: 20 },
  },
  {
    collection: 'providers',
    timestamps: false
  }
);

export const Provider: Model<ProviderDocument> = mongoose.model<ProviderDocument>('Provider', ProviderSchema);
