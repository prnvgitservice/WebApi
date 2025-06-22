import mongoose, { Schema, Document, Model } from 'mongoose';

export interface MainSeoDocument extends Document {
  url: string;
  title: string;
  keywords: string;
  description: string;
  added: Date;
  updated: Date;
  status: '1' | '2'; // 1-Active, 2-deleted/inactive
}

const mainSeoSchema: Schema<MainSeoDocument> = new Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    keywords: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    added: {
      type: Date,
      required: true,
      default: () => new Date(),
    },
    updated: {
      type: Date,
      required: true,
      default: () => new Date(),
    },
    status: {
      type: String,
      enum: ['1', '2'],
      required: true,
    },
  },
  {
    collection: 'main_seo',
    timestamps: false,
  }
);

export const MainSeo: Model<MainSeoDocument> = mongoose.model<MainSeoDocument>(
  'MainSeo',
  mainSeoSchema
);
