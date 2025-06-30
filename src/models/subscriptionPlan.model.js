import mongoose from 'mongoose';

const featureSchema = new mongoose.Schema({
  text: { type: String, required: true },
  included: { type: Boolean, default: true }, // default true for compatibility
}, { _id: false });

const fullFeatureSchema = new mongoose.Schema({
  text: { type: String, required: true },
}, { _id: false });

const planSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  originalPrice: { type: String },
  discount: { type: String },
  gst: { type: String },
  validity: { type: String },
  color: { type: String },
  buttonColor: { type: String },
  popular: { type: Boolean, default: false },

  features: [featureSchema],
  fullFeatures: [fullFeatureSchema],
}, {
  timestamps: true,
});

const Plan = mongoose.model('Subscriptions', planSchema);

export default Plan;
