import NotFound from '../errors/NotFound.js';
import { author } from '../models/Author.js';

class AuthorController {
    static async getAuthor(_, res, next) {
        try {
            const getAuthor = await author.find({});
            return res.status(200).json(getAuthor);
        } catch (error) {
            next(error);
        }
    }

    static async getAuthorById(req, res, next) {
        try {
            const id = req.params.id;
            const result = await author.findById(id);
            if (!result) {
                return next(new NotFound('Autor não encontrado'));
            }
            return res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    static async getAuthorByName(req, res, next) {
        try {
            const name = req.params.name;
            const result = await author.find({ name });
            if (!result || result.length === 0) {
                return next(new NotFound('Autor não encontrado'));
            }
            return res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    static async createNewAuthor(req, res, next) {
        try {
            const newAuthor = await author.create(req.body);
            return res.status(201).send({ message: 'Criado com sucesso', author: newAuthor });
        } catch (error) {
            next(error);
        }
    }

    static async updateAuthor(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                return next(new NotFound('Autor não encontrado'));
            }
            await author.findByIdAndUpdate(id, req.body);
            return res.status(200).json({ message: 'Autor atualizado com sucesso' });
        } catch (error) {
            next(error);
        }
    }

    static async deleteAuthor(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                return next(new NotFound('Autor não encontrado'));
            }
            await author.deleteOne({ _id: id });
            return res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

export default AuthorController;
