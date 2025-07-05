import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema, model } = mongoose;

const technicianSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "Technician",
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, 'Phone number must be 10 digits']
  },
  hash_password: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
}, { timestamps: true });

technicianSchema.pre('save', async function(next) {
  if (!this.isModified('hash_password')) return next();
  this.hash_password = await bcrypt.hash(this.hash_password, 12);
  next();
});

technicianSchema.methods.isPasswordMatch = function(password) {
  return bcrypt.compare(password, this.hash_password);
};

export default model('Technician', technicianSchema);
