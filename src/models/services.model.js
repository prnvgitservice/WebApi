import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const photoSchema = new Schema({
  url: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

// const serviceSchema = new Schema({
//   technicianId: {
//     type: Schema.Types.ObjectId,
//     ref: 'Technician',
//     required: true,
//   },
//   businessProfileId: {
//     type: Schema.Types.ObjectId,
//     ref: 'TechnicianProfile',
//   },
//   category: {
//     type: String,
//     required: true,
//     enum: ['AC Repair', 'Plumbing', 'Electrical', 'Carpentry', 'Other'],
//   },
//   title: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   description: {
//     type: String,
//     trim: true,
//     maxlength: 1000,
//   },
//   price: {
//     type: Number,
//     required: true,
//     min: 0,
//   },
//   bookingCount: {
//     type: Number,
//     default: 0,
//   },
//   photos: [photoSchema], // optional, remove if photo is not service-specific
// }, {
//   timestamps: true,
// });

const serviceSchema = new Schema({
  technicianId: {
    type: Schema.Types.ObjectId,
    ref: 'Technician',
    required: true,
  },
  serviceName: {
    type: String,
    required: [true, "Service name is required"],
    trim: true
  },
  ratings: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  reviews: {
    type: Number,
    min: 0,
    default: 0
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be a positive number"]
  },
  image: {
    type: String,
    match: [/^https?:\/\/.+/, 'Image must be a valid URL'],
    default: ''
  }
}, { timestamps: true });

// module.exports = mongoose.model('Service', serviceSchema);
export default model('Service', serviceSchema);
