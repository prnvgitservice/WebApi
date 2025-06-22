import mongoose, { Schema, Document, Model } from 'mongoose';

export interface BlogCategoryDocument extends Document {
  lang_id?: number;
  name?: string;
  slug?: string;
  description?: string;
  keywords?: string;
  category_order?: number;
  status: number;
  createdAt: Date;
  createdBy: number;
  updatedAt?: Date;
  updatedBy?: number;
}

const blogCategorySchema: Schema<BlogCategoryDocument> = new Schema(
  {
    lang_id: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      maxlength: 255,
      default: null,
    },
    slug: {
      type: String,
      maxlength: 255,
      default: null,
    },
    description: {
      type: String,
      maxlength: 500,
      default: null,
    },
    keywords: {
      type: String,
      maxlength: 255,
      default: null,
    },
    category_order: {
      type: Number,
      default: null,
    },
    status: {
      type: Number,
      required: true,
      default: 1,
    },
    createdAt: {
      type: Date,
      required: true,
      default: () => new Date(),
    },
    createdBy: {
      type: Number,
      required: true,
    },
    updatedAt: {
      type: Date,
      default: null,
    },
    updatedBy: {
      type: Number,
      default: null,
    },
  },
  {
    collection: 'blog_categories',
    timestamps: false, // Manual timestamps used
  }
);

export const BlogCategory: Model<BlogCategoryDocument> = mongoose.model<BlogCategoryDocument>(
  'BlogCategory',
  blogCategorySchema
);
