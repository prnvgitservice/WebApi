import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ColorDocument extends Document {
  color_name: string;
  status?: 'active' | 'inactive';
  created_at?: Date;
  updated_at?: Date;
}

const colorSchema: Schema<ColorDocument> = new Schema(
  {
    color_name: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  {
    collection: 'colors',
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

export const Color: Model<ColorDocument> = mongoose.model<ColorDocument>(
  'Color',
  colorSchema
);
