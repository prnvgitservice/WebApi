import mongoose, { Schema, Document, Model } from 'mongoose';

export interface PrnvPincodeDocument extends Document {
  prnv_sa_id: number;
  Pnc_aliasname?: string;
  Pnc_Code?: number;
  Pnc_Description?: string;
  Pnc_City?: number;
  Pnc_State?: number;
  Pnc_Country?: number;
  Pnc_Meta_Title?: string;
  Pnc_Meta_Description?: string;
  Pnc_Meta_Keywords?: string;
  Pnc_Meta_SocialMedia_Sharing_Image?: string;
  Pnc_CreatedBy?: number;
  Pnc_LastModifiedDateTime?: Date;
}

const prnvPincodeSchema: Schema<PrnvPincodeDocument> = new Schema(
  {
    prnv_sa_id: {
      type: Number,
      required: true,
    },
    Pnc_aliasname: {
      type: String,
      maxlength: 120,
      trim: true,
    },
    Pnc_Code: {
      type: Number,
      min: 0,
      max: 999999,
    },
    Pnc_Description: {
      type: String,
    },
    Pnc_City: {
      type: Number,
    },
    Pnc_State: {
      type: Number,
    },
    Pnc_Country: {
      type: Number,
    },
    Pnc_Meta_Title: {
      type: String,
      maxlength: 150,
      trim: true,
    },
    Pnc_Meta_Description: {
      type: String,
      maxlength: 200,
      trim: true,
    },
    Pnc_Meta_Keywords: {
      type: String,
      maxlength: 200,
      trim: true,
    },
    Pnc_Meta_SocialMedia_Sharing_Image: {
      type: String,
      maxlength: 500,
      trim: true,
    },
    Pnc_CreatedBy: {
      type: Number,
    },
    Pnc_LastModifiedDateTime: {
      type: Date,
    },
  },
  {
    collection: 'prnv_pincodes',
    timestamps: false,
  }
);

export const PrnvPincodes: Model<PrnvPincodeDocument> = mongoose.model<PrnvPincodeDocument>(
  'PrnvPincodes',
  prnvPincodeSchema
);
