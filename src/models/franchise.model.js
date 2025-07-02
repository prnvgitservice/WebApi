import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const franchiseSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  franchiseCode: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  economy: {
    type: Number,
    required: true,
    min: 0
  },
  gold: {
    type: Number,
    required: true,
    min: 0
  },
  platinum: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'suspended'],
    default: 'active'
  }
}, {
  timestamps: true
});

export default model('Franchise', franchiseSchema);
