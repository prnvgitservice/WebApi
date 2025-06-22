import mongoose, { Schema, Document, Model } from 'mongoose';

export interface CategoryDocument extends Document {
  category_name: string;
  category_slug: string;
  other_slug: string;
  category_image: string;
  thumb_image: string;
  cat_name: string;
  category_description_content: string;
  cat_desc_image: string;
  category_mobile_icon: string;
  is_featured?: number | null;
  status: number;
  totalviews: number;
  created_at?: Date | null;
  meta_title?: string | null;
  heading: string;
  meta_description?: string | null;
  meta_keywords?: string | null;
  home_page_order: number;
}

const categorySchema: Schema<CategoryDocument> = new Schema(
  {
    category_name: {
      type: String,
      maxlength: 500,
      required: true,
    },
    category_slug: {
      type: String,
      maxlength: 250,
      required: true,
    },
    other_slug: {
      type: String,
      maxlength: 100,
      required: true,
    },
    category_image: {
      type: String,
      maxlength: 500,
      required: true,
    },
    thumb_image: {
      type: String,
      maxlength: 225,
      required: true,
    },
    cat_name: {
      type: String,
      maxlength: 255,
      required: true,
    },
    category_description_content: {
      type: String,
      required: true,
    },
    cat_desc_image: {
      type: String,
      required: true,
    },
    category_mobile_icon: {
      type: String,
      maxlength: 225,
      required: true,
    },
    is_featured: {
      type: Number,
      default: null,
    },
    status: {
      type: Number,
      required: true,
    },
    totalviews: {
      type: Number,
      required: true,
      default: 0,
    },
    created_at: {
      type: Date,
      default: null,
    },
    meta_title: {
      type: String,
      maxlength: 250,
      default: null,
    },
    heading: {
      type: String,
      maxlength: 250,
      required: true,
    },
    meta_description: {
      type: String,
      default: null,
    },
    meta_keywords: {
      type: String,
      default: null,
    },
    home_page_order: {
      type: Number,
      required: true,
    },
  },
  {
    collection: 'categories',
    timestamps: false,
  }
);

export const Category: Model<CategoryDocument> = mongoose.model<CategoryDocument>(
  'Category',
  categorySchema
);
