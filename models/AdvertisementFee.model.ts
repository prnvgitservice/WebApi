import mongoose, { Schema, Document, Model } from 'mongoose';

export interface AdvertisementFeeDocument extends Document {
  advertisement_name: string;
  fee: number;
  fee_before: number;
  offer_amount_before: number;
  Has_Special: boolean;
  currency_code: string;
  duration: number;
  fee_description: string;
  status: number;
  subsc_type: number;
  Allowed_Pincodes: number;
  Allowed_Members: number;
  Allowed_WorkImages: number;
  Has_Referral_Bonus: boolean;
  Has_Best_Work_Videos_Youtube: boolean;
  Has_SocialMedia_Promotion: boolean;
  Has_Homepage_Promotion: boolean;
  Plan_Description: string;
  offer_amount: number;
  offer_amount_per: number;
}

const advertisementFeeSchema: Schema<AdvertisementFeeDocument> = new Schema(
  {
    advertisement_name: {
      type: String,
      required: true,
      maxlength: 150,
    },
    fee: {
      type: Number,
      required: true,
    },
    fee_before: {
      type: Number,
      required: true,
    },
    offer_amount_before: {
      type: Number,
      required: true,
    },
    Has_Special: {
      type: Boolean,
      required: true,
    },
    currency_code: {
      type: String,
      required: true,
      maxlength: 5,
    },
    duration: {
      type: Number,
      required: true,
      // You can comment using virtual doc annotation
    },
    fee_description: {
      type: String,
      required: true,
      maxlength: 1024, // conservative limit since MySQL TEXT("tiny") is ~255 bytes
    },
    status: {
      type: Number,
      required: true,
      // 0 - inactive, 1 - active
    },
    subsc_type: {
      type: Number,
      required: true,
    },
    Allowed_Pincodes: {
      type: Number,
      required: true,
    },
    Allowed_Members: {
      type: Number,
      required: true,
    },
    Allowed_WorkImages: {
      type: Number,
      required: true,
    },
    Has_Referral_Bonus: {
      type: Boolean,
      required: true,
    },
    Has_Best_Work_Videos_Youtube: {
      type: Boolean,
      required: true,
    },
    Has_SocialMedia_Promotion: {
      type: Boolean,
      required: true,
    },
    Has_Homepage_Promotion: {
      type: Boolean,
      required: true,
    },
    Plan_Description: {
      type: String,
      required: true,
      maxlength: 2048,
    },
    offer_amount: {
      type: Number,
      required: true,
    },
    offer_amount_per: {
      type: Number,
      required: true,
    },
  },
  {
    collection: 'advertisement_fee',
    timestamps: false,
  }
);

export const AdvertisementFee: Model<AdvertisementFeeDocument> = mongoose.model<AdvertisementFeeDocument>(
  'AdvertisementFee',
  advertisementFeeSchema
);
