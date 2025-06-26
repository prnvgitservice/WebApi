import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    category_name: {
      type: String,
      required: true,
      trim: true,
    },
    category_slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    category_image: {
      type: String,
      default: null,
    },
    category_description_content: {
      type: String,
      default: '',
    },
    status: {
      type: Number,
      default: 1, // 1 = active, 0 = inactive
      enum: [0, 1],
    },
  },
  {
    timestamps: true, 
  }
);

export default mongoose.model('Category', CategorySchema);
