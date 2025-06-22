import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ProviderAddressDocument extends Document {
  provider_id?: number;
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

const providerAddressSchema: Schema<ProviderAddressDocument> = new Schema(
  {
    provider_id: {
      type: Number,
    },
    address: {
      type: String,
      maxlength: 250,
      trim: true,
    },
    country_id: {
      type: Number,
    },
    state_id: {
      type: Number,
    },
    city_id: {
      type: Number,
    },
    pincode: {
      type: Number,
    },
    created_at: {
      type: Date,
      default: () => new Date(),
    },
    updated_at: {
      type: Date,
      default: () => new Date(),
    },
    created_by: {
      type: Number,
    },
    updated_by: {
      type: Number,
    },
  },
  {
    collection: 'provider_address',
    timestamps: false,
  }
);

export const ProviderAddress: Model<ProviderAddressDocument> = mongoose.model<ProviderAddressDocument>(
  'ProviderAddress',
  providerAddressSchema
);
