import mongoose, { Schema, Document, Model } from 'mongoose';

export interface AdvGalleryDocument extends Document {
  user_id: number;
  user_type: number; // 1 = provider, 2 = user, 3 = bda
  gallary: string;
  status: 'pending' | 'approved' | 'rejected';
  deleted: '0' | '1'; // soft-delete flag
  added_date: Date;
  updated_date: Date;
  rejected_reason: string;
}

const advGallerySchema: Schema<AdvGalleryDocument> = new Schema(
  {
    user_id: {
      type: Number,
      required: true,
    },
    user_type: {
      type: Number,
      required: true,
      // Add enum in comments if needed
    },
    gallary: {
      type: String,
      required: true,
      maxlength: 4096, // assuming TEXT might store image URLs or metadata
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      required: true,
    },
    deleted: {
      type: String,
      enum: ['0', '1'],
      required: true,
      default: '0',
    },
    added_date: {
      type: Date,
      required: true,
    },
    updated_date: {
      type: Date,
      required: true,
    },
    rejected_reason: {
      type: String,
      required: true,
      maxlength: 2048,
    },
  },
  {
    collection: 'adv_gallery',
    timestamps: false,
  }
);

export const AdvGallery: Model<AdvGalleryDocument> = mongoose.model<AdvGalleryDocument>(
  'AdvGallery',
  advGallerySchema
);
