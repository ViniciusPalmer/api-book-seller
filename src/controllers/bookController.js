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
        try {
            const newBook = await book.create(req.body);
            return res.status(201).send({ message: 'Criado com sucesso', book: newBook });
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
}

export default BookController;
