import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const photoSchema = new Schema({
  url: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now }
});

const technicianProfileSchema = new Schema({
  technicianId: {
    type: Schema.Types.ObjectId,
    ref: 'Technician',
    required: true,
    unique: true
  },
  businessName: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['AC Repair', 'Plumbing', 'Electrical', 'Carpentry', 'Other']
  },
  location: {
    addressLine: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
    fullAddress: { type: String }, // optional string for display
  },
  phoneNumber: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Phone number must be 10 digits']
  },
  experienceYears: {
    type: Number,
    min: 0,
    required: true
  },
  rating: {
    average: { type: Number, default: 0, min: 0, max: 5 },
    count: { type: Number, default: 0 }
  },
  photos: [photoSchema],
  servicesOffered: [
    {
      title: String,
      description: String,
      price: Number
    }
  ],
  reviews: [
    {
      customerId: { type: Schema.Types.ObjectId, ref: 'User' },
      comment: String,
      rating: { type: Number, min: 0, max: 5 },
      createdAt: { type: Date, default: Date.now }
    }
  ],
  faqs: [
    {
      question: String,
      answer: String
    }
  ]
}, { timestamps: true });

export default model('TechnicianProfile', technicianProfileSchema);
