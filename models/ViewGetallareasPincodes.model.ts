import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ViewGetAllAreasPincodesDocument extends Document {
  Ar_Id: number;
  Ar_Name?: string;
  Pnc_aliasname?: string;
  Pnc_Code?: number;
  Pnc_Id: number;
}

const ViewGetAllAreasPincodesSchema: Schema<ViewGetAllAreasPincodesDocument> = new Schema(
  {
    Ar_Id: {
      type: Number,
      required: true,
    },
    Ar_Name: {
      type: String,
      maxlength: 120,
    },
    Pnc_aliasname: {
      type: String,
      maxlength: 120,
    },
    Pnc_Code: {
      type: Number,
    },
    Pnc_Id: {
      type: Number,
      required: true,
    },
  },
  {
    collection: 'view_getallareas_pincodes',
    timestamps: false,
  }
);

// Avoid setting _id if not needed
ViewGetAllAreasPincodesSchema.set('toObject', { virtuals: true });
ViewGetAllAreasPincodesSchema.set('toJSON', { virtuals: true });

export const ViewGetAllAreasPincodes: Model<ViewGetAllAreasPincodesDocument> = mongoose.model<ViewGetAllAreasPincodesDocument>(
  'ViewGetAllAreasPincodes',
  ViewGetAllAreasPincodesSchema
);
