import { author } from '../models/Author.js';
import book from '../models/Book.js';

class BookController {
    static async getBooks(_, res) {
        try {
            const getBooks = await book.find({});
            return res.status(200).json(getBooks);
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - Falha na requisição` });
        }
    }

    static async getBookById(req, res) {
        try {
            const id = req.params.id;
            const result = await book.findById(id);
            if (!result) {
                return res.status(404).json({ error: 'Livro não encontrado' });
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - Falha na requisição` });
        }
    }

    static async createNewBook(req, res) {

        const newBook = req.body;

        try {
            const authorData = await author.findById(newBook.author);
            const fullBook = { ...newBook, author: { ...authorData._doc } };
            const createdBook = await book.create(fullBook);
            return res.status(201).send({ message: 'Criado com sucesso', book: createdBook });
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - Falha ao cadastrar livro` });
        }
    }

    static async updateBook(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(404).json({ error: 'Livro não encontrado' });
            }
            await book.findByIdAndUpdate(id, req.body);
            return res.status(200).json({ message: 'Livro atualizado com sucesso' });
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - Falha na atualização do livro` });
        }
    }

    static async deleteBook(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(404).json({ error: 'Livro não encontrado' });
            }
            await book.deleteOne({ _id: id });
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - Falha ao deletar o livro` });
        }
    }

    static async searchBooks(req, res) {
        try {
            const { title, year, gender, price } = req.query;
            const query = {};

            if (title) query.title = { $regex: title, $options: 'i' };
            if (year) query.year = Number(year);
            if (gender) query.gender = { $regex: gender, $options: 'i' };
            if (price) query.price = Number(price);

            const results = await book.find(query);

            if (results.length === 0) {
                return res.status(404).json({ error: 'Nenhum livro encontrado' });
            }

            return res.status(200).json(results);
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - Falha na requisição` });
        }
    }
}

export default BookController;
