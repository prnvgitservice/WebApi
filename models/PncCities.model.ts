import mongoose, { Schema, Document, Model } from 'mongoose';

export interface PncCityDocument extends Document {
  Ct_Name?: string;
  Ct_StateId?: number;
  Ct_MetaTitle?: string;
  Ct_MetaDescription?: string;
  Ct_keywords?: string;
  Ct_SocialMediaSharing?: string;
}

const pncCitySchema: Schema<PncCityDocument> = new Schema(
  {
    Ct_Name: {
      type: String,
      maxlength: 255,
      trim: true,
    },
    Ct_StateId: {
      type: Number,
    },
    Ct_MetaTitle: {
      type: String,
      maxlength: 255,
      trim: true,
    },
    Ct_MetaDescription: {
      type: String,
      trim: true,
    },
    Ct_keywords: {
      type: String,
      maxlength: 255,
      trim: true,
    },
    Ct_SocialMediaSharing: {
      type: String,
      maxlength: 255,
      trim: true,
    },
  },
  {
    collection: 'Pnc_Cities',
    timestamps: false,
  }
);

export const PncCities: Model<PncCityDocument> = mongoose.model<PncCityDocument>(
  'PncCities',
  pncCitySchema
);
