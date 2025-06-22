import mongoose, { Schema, Document, Model } from 'mongoose';

export interface FooterSubmenuDocument extends Document {
  footer_menu: number;
  footer_submenu: string;
  title: string;
  widget_showhide: string;
  widget_name: string;
  link: string;
  address: string;
  phone: string;
  email: string;
  category_view: string;
  category_count: string;
  followus_link: string;
  category_enable: number;
  page_title: string;
  page_desc: string;
  status: number;
  menu_status: number;
  created_date: Date;
}

const footerSubmenuSchema: Schema<FooterSubmenuDocument> = new Schema(
  {
    footer_menu: {
      type: Number,
      required: true,
    },
    footer_submenu: {
      type: String,
      maxlength: 50,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      maxlength: 255,
      required: true,
      trim: true,
    },
    widget_showhide: {
      type: String,
      maxlength: 255,
      required: true,
      trim: true,
    },
    widget_name: {
      type: String,
      maxlength: 250,
      required: true,
      trim: true,
    },
    link: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      maxlength: 250,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      maxlength: 250,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      maxlength: 250,
      required: true,
      trim: true,
    },
    category_view: {
      type: String,
      maxlength: 250,
      required: true,
      trim: true,
    },
    category_count: {
      type: String,
      maxlength: 250,
      required: true,
      trim: true,
    },
    followus_link: {
      type: String,
      required: true,
      trim: true,
    },
    category_enable: {
      type: Number,
      required: true,
      default: 0,
    },
    page_title: {
      type: String,
      maxlength: 50,
      required: true,
      trim: true,
    },
    page_desc: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
    menu_status: {
      type: Number,
      required: true,
      default: 0,
    },
    created_date: {
      type: Date,
      required: true,
      default: () => new Date(),
    },
  },
  {
    collection: 'footer_submenu',
    timestamps: false,
  }
);

export const FooterSubmenu: Model<FooterSubmenuDocument> = mongoose.model<FooterSubmenuDocument>(
  'FooterSubmenu',
  footerSubmenuSchema
);
