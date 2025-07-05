import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const faqSchema = new Schema({
    providerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceProvider',
        required: true
    },
    question: {
        type: String,
        required: [true, "FAQ question is required"],
        trim: true
    },
    answer: {
        type: String,
        required: [true, "FAQ answer is required"],
        trim: true
    }
}, { timestamps: true });

// module.exports = mongoose.model('Faq', faqSchema);
export default model('Faq', faqSchema);
