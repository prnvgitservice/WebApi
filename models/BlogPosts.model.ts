import mongoose, { Schema, Document, Model } from 'mongoose';

export interface BlogPostDocument extends Document {
  lang_id?: number;
  title?: string;
  slug?: string;
  tags?: string;
  summary?: string;
  content?: string;
  keywords?: string;
  category_id?: number;
  storage?: string;
  image_default?: string;
  image_small?: string;
  total_views?: number;
  user_id?: number;
  url?: string;
  blog_meta_title: string;
  status: number;
  createdAt: Date;
  createdBy: number;
  updatedAt?: Date;
  updatedBy?: number;
}

const blogPostSchema: Schema<BlogPostDocument> = new Schema(
  {
    lang_id: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      maxlength: 500,
      default: null,
    },
    slug: {
      type: String,
      maxlength: 500,
      default: null,
    },
    tags: {
      type: String,
      maxlength: 500,
      default: null,
    },
    summary: {
      type: String,
      maxlength: 1000,
      default: null,
    },
    content: {
      type: String,
      default: null,
    },
    keywords: {
      type: String,
      maxlength: 500,
      default: null,
    },
    category_id: {
      type: Number,
      default: null,
    },
    storage: {
      type: String,
      maxlength: 20,
      default: 'local',
    },
    image_default: {
      type: String,
      maxlength: 255,
      default: null,
    },
    image_small: {
      type: String,
      maxlength: 255,
      default: null,
    },
    total_views: {
      type: Number,
      default: 0,
    },
    user_id: {
      type: Number,
      default: 1,
    },
    url: {
      type: String,
      default: null,
    },
    blog_meta_title: {
      type: String,
      maxlength: 255,
      required: true,
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
    collection: 'blog_posts',
    timestamps: false,
  }
);

export const BlogPost: Model<BlogPostDocument> = mongoose.model<BlogPostDocument>(
  'BlogPost',
  blogPostSchema
);
