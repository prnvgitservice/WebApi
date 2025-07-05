import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const featureSchema = new Schema({
  name: { type: String, required: true },
  included: { type: Boolean, default: false }
}, { _id: false });

const subscriptionPlanSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  originalPrice: {
    type: Number,
    default: null
  },
  discount: {
    type: Number,
    default: null
  },
  gst: {
    type: Number,
    required: true,
    min: 0
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0
  },
  validity: {
    type: Number,
    required: true,
    min: 1
  },
  validityUnit: {
    type: String,
    enum: ['days', 'months', 'years'],
    default: 'days'
  },
  maxMembers: {
    type: Number,
    default: null
  },
  maxLeads: {
    type: Number,
    default: null
  },
  features: {
    type: [featureSchema],
    required: true
  },
  isPopular: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default model('SubscriptionPlan', subscriptionPlanSchema);
