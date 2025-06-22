import mongoose, { Schema, Document, Model } from 'mongoose';

export interface PrnvCartDocument extends Document {
  user_id: number;
  provider_id: number;
  service_id: number;
  created_at: Date;
}

const prnvCartSchema: Schema<PrnvCartDocument> = new Schema(
  {
    user_id: {
      type: Number,
      required: true,
    },
    provider_id: {
      type: Number,
      required: true,
    },
    service_id: {
      type: Number,
      required: true,
    },
    created_at: {
      type: Date,
      required: true,
      default: () => new Date(),
    },
  },
  {
    collection: 'prnv_cart',
    timestamps: false,
  }
);

export const PrnvCart: Model<PrnvCartDocument> = mongoose.model<PrnvCartDocument>(
  'PrnvCart',
  prnvCartSchema
);
