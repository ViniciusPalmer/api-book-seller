import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: [true, 'O nome do autor é obrigatório'] },
    nationality: { type: String }

}, { versionKey: false });

const author = mongoose.model('autores', authorSchema);

export default author;
export { authorSchema };

