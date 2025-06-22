import mongoose, { Schema, Document, Model } from 'mongoose';

export interface FAQDocument extends Document {
  page_title: string;
  page_content: string;
  status: number;
  created_datetime: Date;
  updated_datetime: Date;
}

const faqSchema: Schema<FAQDocument> = new Schema(
  {
    page_title: {
      type: String,
      maxlength: 250,
      required: true,
      trim: true,
    },
    page_content: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
      default: 1,
    },
    created_datetime: {
      type: Date,
      required: true,
    },
    updated_datetime: {
      type: Date,
      required: true,
    },
  },
  {
    collection: 'faq',
    timestamps: false, // custom datetime fields used
  }
);

export const FAQ: Model<FAQDocument> = mongoose.model<FAQDocument>(
  'FAQ',
  faqSchema
);
