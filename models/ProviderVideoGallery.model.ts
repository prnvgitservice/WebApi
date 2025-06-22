import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ProviderVideoGalleryDocument extends Document {
  provider_id: number;
  video_url?: string;
  status: 'approved' | 'rejected' | 'pending';
  deleted: '0' | '1';
  rejected_reason?: string;
  created_at: Date;
  updated_at: Date;
}

const ProviderVideoGallerySchema: Schema<ProviderVideoGalleryDocument> = new Schema(
  {
    provider_id: { type: Number, required: true },
    video_url: { type: String },
    status: {
      type: String,
      enum: ['approved', 'rejected', 'pending'],
      required: true,
      default: 'pending'
    },
    deleted: {
      type: String,
      enum: ['0', '1'],
      required: true,
      default: '0'
    },
    rejected_reason: { type: String },
    created_at: {
      type: Date,
      default: Date.now,
      required: true
    },
    updated_at: {
      type: Date,
      default: Date.now,
      required: true
    }
  },
  {
    collection: 'provider_video_gallery',
    timestamps: false
  }
);

export const ProviderVideoGallery: Model<ProviderVideoGalleryDocument> = mongoose.model<ProviderVideoGalleryDocument>(
  'ProviderVideoGallery',
  ProviderVideoGallerySchema
);
