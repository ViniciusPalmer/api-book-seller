import mongoose from 'mongoose';
import { authorSchema } from './Author.js';

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, trim: true, required: [true, 'Título é obrigatório'] },
    author: authorSchema,
    type: { type: String, required: [true, 'Tipo é obrigatório'], 
        enum:{ 
            values:['Ficção', 'Não Ficção', 'Terror', 'Romance', 'Fantasia', "Suspense", "Religiosos", "Didático", "Culinária"], 
            message: "O tipo {VALUE} não é um valor permitido" 
        }
    },
    year: { type: Number, default: new Date().getFullYear() },
    gender: { type: String },
    isbn: { type: String },
    price: { 
        type: Number, 
        validate: {
            validator: (value) => {
            return value >= 0;
        },
        message: "O valor do livro deve ser maior que 0, o valor informado é {VALUE}"
    },
        default: 0 },
    pages: { 
        type: Number, 
        min: [10, 'O livro deve ter no mínimo 10 páginas'], 
        max: [10000, 'O livro deve ter no máximo 10000 páginas']  
    },
}, { versionKey: false });

const book = mongoose.model('book', bookSchema);

export default book;
