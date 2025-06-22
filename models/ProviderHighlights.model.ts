import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ProviderHighlightsDocument extends Document {
  highlights: string;
  status: 'active' | 'inactive';
  created_at: Date;
  updated_at: Date;
}

const providerHighlightsSchema: Schema<ProviderHighlightsDocument> = new Schema(
  {
    highlights: {
      type: String,
      required: true,
      maxlength: 250,
      trim: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      required: true,
      default: 'active',
    },
    created_at: {
      type: Date,
      required: true,
      default: () => new Date(),
    },
    updated_at: {
      type: Date,
      required: true,
      default: () => new Date(),
    },
  },
  {
    collection: 'provider_highlights',
    timestamps: false,
  }
);

export const ProviderHighlights: Model<ProviderHighlightsDocument> = mongoose.model<ProviderHighlightsDocument>(
  'ProviderHighlights',
  providerHighlightsSchema
);
