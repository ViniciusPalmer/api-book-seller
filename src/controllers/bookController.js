import NotFound from '../errors/NotFound.js';
import { author, book } from '../models/index.js';

class BookController {
    static async getBooks(_, res, next) {
        try {
            const getBooks = await book.find({});
            return res.status(200).json(getBooks);
        } catch (error) {
            next(error)
        }
    }

    static async getBookById(req, res, next) {
        try {
            const id = req.params.id;
            const result = await book.findById(id);
            if (!result) {
                return next(new NotFound('Livro não encontrado'));
            }
            return res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    static async createNewBook(req, res, next) {

        const newBook = req.body;

        try {
            const authorData = await author.findById(newBook.author);
            const fullBook = { ...newBook, author: { ...authorData._doc } };
            const createdBook = await book.create(fullBook);
            return res.status(201).send({ message: 'Criado com sucesso', book: createdBook });
        } catch (error) {
            next(error);
        }
    }

    static async updateBook(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(404).json({ error: 'Livro não encontrado' });
            }
            await book.findByIdAndUpdate(id, req.body);
            return res.status(200).json({ message: 'Livro atualizado com sucesso' });
        } catch (error) {
            next(error);
        }
    }

    static async deleteBook(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(404).json({ error: 'Livro não encontrado' });
            }
            await book.deleteOne({ _id: id });
            return res.status(204).send();
        } catch (error) {
            next(error);
        }
    }

    static async searchBooks(req, res, next) {
        try {
            const { title, year, gender, price } = req.query;
            const query = {};

            if (title) query.title = { $regex: title, $options: 'i' };
            if (year) query.year = Number(year);
            if (gender) query.gender = { $regex: gender, $options: 'i' };
            if (price) query.price = Number(price);

            const results = await book.find(query);

            if (results.length === 0) {
                return next(new NotFound("Nenhum livro encontrado"))
            }

            return res.status(200).json(results);
        } catch (error) {
            next(error);
        }
    }
}

export default BookController;
