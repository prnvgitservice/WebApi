import mongoose, { Document, Schema } from 'mongoose';

export interface ITechnician extends Document {
  fullname: string;
  email: string;
  mobileNumber: string;
  dateOfBirth: Date;
  serviceCategory: string;
}

const TechnicianSchema: Schema = new Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
    match: /^[6-9]\d{9}$/, // Indian mobile number format
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  serviceCategory: {
    type: String,
    required: true,
    enum: ['Electrician', 'Plumber', 'Carpenter', 'Cleaner', 'Painter'], 
  },
}, {
  timestamps: true,
});

export default mongoose.model<ITechnician>('Technician', TechnicianSchema);
