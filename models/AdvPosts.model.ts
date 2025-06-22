import mongoose, { Schema, Document, Model } from 'mongoose';

export interface AdvPostDocument extends Document {
  adv_name: string;
  adv_desc: string;
  adv_image: string;
  user_id: number;
  user_type: number; // 1 = provider, 2 = user, 3 = bda
  status: number;     // 1 = inactive, 2 = active
  added_date: Date;
  updated_date: Date;
  adv_slug: string;
  adv_price: string;
  adv_address: string;
}

const advPostSchema: Schema<AdvPostDocument> = new Schema(
  {
    adv_name: {
      type: String,
      required: true,
      maxlength: 100,
    },
    adv_desc: {
      type: String,
      required: true,
      maxlength: 4096, // for rich descriptions
    },
    adv_image: {
      type: String,
      required: true,
      maxlength: 4096, // store image URL or path
    },
    user_id: {
      type: Number,
      required: true,
    },
    user_type: {
      type: Number,
      required: true,
      // 1 = provider, 2 = user, 3 = bda
    },
    status: {
      type: Number,
      required: true,
      // 1 = inactive, 2 = active
    },
    added_date: {
      type: Date,
      required: true,
    },
    updated_date: {
      type: Date,
      required: true,
    },
    adv_slug: {
      type: String,
      required: true,
      maxlength: 512,
    },
    adv_price: {
      type: String,
      required: true,
      maxlength: 100,
    },
    adv_address: {
      type: String,
      required: true,
      maxlength: 1024,
    },
  },
  {
    collection: 'adv_posts',
    timestamps: false,
  }
);

export const AdvPost: Model<AdvPostDocument> = mongoose.model<AdvPostDocument>(
  'AdvPost',
  advPostSchema
);
