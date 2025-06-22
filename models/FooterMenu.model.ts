import mongoose, { Schema, Document, Model } from 'mongoose';

export interface FooterMenuDocument extends Document {
  title: string;
  status: number;
  created_date: Date;
}

const footerMenuSchema: Schema<FooterMenuDocument> = new Schema(
  {
    title: {
      type: String,
      maxlength: 50,
      required: true,
      trim: true,
    },
    status: {
      type: Number,
      required: true,
      default: 1,
    },
    created_date: {
      type: Date,
      required: true,
      default: () => new Date(),
    },
  },
  {
    collection: 'footer_menu',
    timestamps: false,
  }
);

export const FooterMenu: Model<FooterMenuDocument> = mongoose.model<FooterMenuDocument>(
  'FooterMenu',
  footerMenuSchema
);
