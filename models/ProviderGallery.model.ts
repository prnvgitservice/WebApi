import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ProviderGalleryDocument extends Document {
  provider_id: number;
  files: string;
  videos?: string;
  status: 'approved' | 'rejected' | 'pending';
  deleted: '0' | '1';
  rejected_reason?: string;
  created_at: Date;
  updated_at: Date;
}

const providerGallerySchema: Schema<ProviderGalleryDocument> = new Schema(
  {
    provider_id: {
      type: Number,
      required: true,
    },
    files: {
      type: String,
      required: true,
    },
    videos: {
      type: String,
    },
    status: {
      type: String,
      enum: ['approved', 'rejected', 'pending'],
      required: true,
      default: 'pending',
    },
    deleted: {
      type: String,
      enum: ['0', '1'],
      required: true,
      default: '0',
    },
    rejected_reason: {
      type: String,
    },
    created_at: {
      type: Date,
      required: true,
      default: () => new Date(),
    },
    updated_at: {
      type: Date,
      required: true,
      default: () => new Date(),
    },
  },
  {
    collection: 'provider_gallery',
    timestamps: false,
  }
);

export const ProviderGallery: Model<ProviderGalleryDocument> = mongoose.model<ProviderGalleryDocument>(
  'ProviderGallery',
  providerGallerySchema
);
