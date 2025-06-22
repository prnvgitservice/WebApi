import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ServiceDocument extends Document {
  user_id?: number;
  service_title: string;
  currency_code?: string;
  service_sub_title?: string;
  service_amount: number;
  category: string;
  subcategory: string;
  about: string;
  service_offered: string;
  service_location?: string;
  service_latitude: string;
  service_longitude: string;
  service_image: string;
  service_details_image?: string;
  thumb_image: string;
  mobile_image: string;
  url: string;
  status: number;
  total_views: number;
  rating: string;
  rating_count: string;
  admin_verification?: number;
  created_at: Date;
  updated_at: Date;
  deleted_reason: string;
  service_country: string;
  service_state: string;
  service_city: string;
  AccessTo_AllPincodes: boolean;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  created_by: string;
}

const ServiceSchema: Schema<ServiceDocument> = new Schema(
  {
    user_id: { type: Number },
    service_title: { type: String, required: true, maxlength: 500 },
    currency_code: { type: String, maxlength: 25 },
    service_sub_title: { type: String, maxlength: 500 },
    service_amount: { type: Number, required: true },
    category: { type: String, required: true, maxlength: 500 },
    subcategory: { type: String, required: true, maxlength: 500 },
    about: { type: String, required: true },
    service_offered: { type: String, required: true },
    service_location: { type: String, maxlength: 500 },
    service_latitude: { type: String, required: true, maxlength: 500 },
    service_longitude: { type: String, required: true, maxlength: 500 },
    service_image: { type: String, required: true },
    service_details_image: { type: String },
    thumb_image: { type: String, required: true },
    mobile_image: { type: String, required: true },
    url: { type: String, required: true, maxlength: 250 },
    status: { type: Number, required: true, default: 1 },
    total_views: { type: Number, required: true },
    rating: { type: String, required: true },
    rating_count: { type: String, required: true },
    admin_verification: { type: Number },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
    deleted_reason: { type: String, required: true },
    service_country: { type: String, required: true },
    service_state: { type: String, required: true },
    service_city: { type: String, required: true },
    AccessTo_AllPincodes: { type: Boolean, required: true },
    meta_title: { type: String },
    meta_description: { type: String },
    meta_keywords: { type: String },
    created_by: { type: String, required: true, default: 'provider' },
  },
  {
    collection: 'services',
    timestamps: false,
  }
);

export const Service: Model<ServiceDocument> = mongoose.model<ServiceDocument>('Service', ServiceSchema);
