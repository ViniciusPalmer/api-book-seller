import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, trim: true, required: true },
    author: { type: String, trim: true, required: true },
    year: { type: Number, default: new Date().getFullYear() },
    gender: { type: String },
    isbn: { type: String },
    price: { type: Number, default: 0 },
    pages: { type: Number, default: 0 }
}, { versionKey: false });

const book = mongoose.model('book', bookSchema);

export default book;
