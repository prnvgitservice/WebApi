import mongoose, { Schema, Document, Model } from 'mongoose';

export interface SeoContentDetailsDocument extends Document {
  url: string;
  content?: string;
  price_chart?: string;
  status: number;
  added_date: Date;
  updated_date?: Date;
}

const SeoContentDetailsSchema: Schema<SeoContentDetailsDocument> = new Schema(
  {
    url: {
      type: String,
      required: true,
      maxlength: 250
    },
    content: {
      type: String,
    },
    price_chart: {
      type: String, // long text
    },
    status: {
      type: Number,
      required: true,
      default: 1,
    },
    added_date: {
      type: Date,
      required: true,
      default: Date.now
    },
    updated_date: {
      type: Date
    }
  },
  {
    collection: 'seo_content_details',
    timestamps: false
  }
);

export const SeoContentDetails: Model<SeoContentDetailsDocument> = mongoose.model<SeoContentDetailsDocument>(
  'SeoContentDetails',
  SeoContentDetailsSchema
);
