import mongoose, { Schema, Document, Model } from 'mongoose';

export interface PrnvServiceAreaDocument extends Document {
  sa_name: string;
  sa_name_slug: string;
  sa_meta_title: string;
  sa_meta_description: string;
  sa_keywords: string;
  sa_socialmediasharing: string;
  sa_status: 'active' | 'inactive';
  sa_created_at: Date;
  sa_updated_at: Date;
}

const prnvServiceAreaSchema: Schema<PrnvServiceAreaDocument> = new Schema(
  {
    sa_name: {
      type: String,
      required: true,
      maxlength: 250,
      trim: true,
    },
    sa_name_slug: {
      type: String,
      required: true,
      maxlength: 200,
      trim: true,
      // unique: true, // Uncomment if needed
    },
    sa_meta_title: {
      type: String,
      required: true,
      maxlength: 250,
      trim: true,
    },
    sa_meta_description: {
      type: String,
      required: true,
      maxlength: 250,
      trim: true,
    },
    sa_keywords: {
      type: String,
      required: true,
      maxlength: 250,
      trim: true,
    },
    sa_socialmediasharing: {
      type: String,
      required: true,
      maxlength: 250,
      trim: true,
    },
    sa_status: {
      type: String,
      enum: ['active', 'inactive'],
      required: true,
      default: 'active',
    },
    sa_created_at: {
      type: Date,
      required: true,
      default: () => new Date(),
    },
    sa_updated_at: {
      type: Date,
      required: true,
      default: () => new Date(),
    },
  },
  {
    collection: 'prnv_service_areas',
    timestamps: false,
  }
);

export const PrnvServiceAreas: Model<PrnvServiceAreaDocument> = mongoose.model<PrnvServiceAreaDocument>(
  'PrnvServiceAreas',
  prnvServiceAreaSchema
);
