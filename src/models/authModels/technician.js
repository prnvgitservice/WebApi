import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema, model } = mongoose;

const technicianSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, 'Phone number must be 10 digits']
  },
  category: {
    type: String,
    required: true,
    enum: ['electrician', 'plumber', 'carpenter', 'mechanic', 'other']
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false
  }
}, { timestamps: true });

technicianSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

technicianSchema.methods.isPasswordMatch = function(password) {
  return bcrypt.compare(password, this.password);
};

export default model('Technician', technicianSchema);
