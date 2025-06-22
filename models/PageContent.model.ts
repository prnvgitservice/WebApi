import mongoose, { Schema, Document, Model } from 'mongoose';

export interface PageContentDocument extends Document {
  page_title: string;
  page_slug: string;
  page_content: string;
  page_route: string;
  status: number;
  page_meta_title: string;
  page_meta_desc: string;
  page_meta_keywords: string;
  created_datetime: Date;
  updated_datetime: Date;
  modules: string;
}

const pageContentSchema: Schema<PageContentDocument> = new Schema(
  {
    page_title: {
      type: String,
      maxlength: 250,
      required: true,
      trim: true,
    },
    page_slug: {
      type: String,
      maxlength: 250,
      required: true,
      trim: true,
    },
    page_content: {
      type: String,
      required: true,
    },
    page_route: {
      type: String,
      maxlength: 255,
      required: true,
      trim: true,
    },
    status: {
      type: Number,
      required: true,
      default: 1,
    },
    page_meta_title: {
      type: String,
      maxlength: 255,
      required: true,
      trim: true,
    },
    page_meta_desc: {
      type: String,
      maxlength: 255,
      required: true,
      trim: true,
    },
    page_meta_keywords: {
      type: String,
      maxlength: 255,
      required: true,
      trim: true,
    },
    created_datetime: {
      type: Date,
      required: true,
    },
    updated_datetime: {
      type: Date,
      required: true,
    },
    modules: {
      type: String,
      maxlength: 255,
      required: true,
      trim: true,
    },
  },
  {
    collection: 'page_content',
    timestamps: false,
  }
);

export const PageContent: Model<PageContentDocument> = mongoose.model<PageContentDocument>(
  'PageContent',
  pageContentSchema
);
