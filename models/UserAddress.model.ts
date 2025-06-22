import mongoose, { Schema, Document, Model } from 'mongoose';

export interface UserAddressDocument extends Document {
  user_id?: number;
  address?: string;
  country_id?: number;
  state_id?: number;
  city_id?: number;
  pincode?: number;
  created_at?: Date;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
}

const UserAddressSchema: Schema<UserAddressDocument> = new Schema(
  {
    user_id: { type: Number },
    address: { type: String, maxlength: 250 },
    country_id: { type: Number },
    state_id: { type: Number },
    city_id: { type: Number },
    pincode: { type: Number },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    created_by: { type: Number },
    updated_by: { type: Number },
  },
  {
    collection: 'user_address',
    timestamps: false,
  }
);

export const UserAddress: Model<UserAddressDocument> = mongoose.model<UserAddressDocument>(
  'UserAddress',
  UserAddressSchema
);
