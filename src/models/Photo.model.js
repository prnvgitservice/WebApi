const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceProvider',
    required: true
  },
  imageUrl: {
    type: String,
    required: true,
    match: [/^https?:\/\/.+/, 'Image must be a valid URL']
  },
  caption: {
    type: String,       
    maxlength: 255
  }
}, { timestamps: true });

module.exports = mongoose.model('Photo', photoSchema);
