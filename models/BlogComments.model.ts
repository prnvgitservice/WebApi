import mongoose, { Schema, Document, Model } from 'mongoose';

export interface BlogCommentDocument extends Document {
  post_id?: number;
  user_id?: number;
  email?: string;
  name?: string;
  comment?: string;
  ip_address?: string;
  status?: number;
  created_at?: Date;
}

const blogCommentSchema: Schema<BlogCommentDocument> = new Schema(
  {
    post_id: {
      type: Number,
      default: null,
    },
    user_id: {
      type: Number,
      default: null,
    },
    email: {
      type: String,
      maxlength: 255,
      default: null,
    },
    name: {
      type: String,
      maxlength: 255,
      default: null,
    },
    comment: {
      type: String,
      maxlength: 5000,
      default: null,
    },
    ip_address: {
      type: String,
      maxlength: 50,
      default: null,
    },
    status: {
      type: Number,
      default: 1, // default status as per Sequelize
    },
    created_at: {
      type: Date,
      default: () => new Date(),
    },
  },
  {
    collection: 'blog_comments',
    timestamps: false, // because created_at is manually handled
  }
);

export const BlogComment: Model<BlogCommentDocument> = mongoose.model<BlogCommentDocument>(
  'BlogComment',
  blogCommentSchema
);
