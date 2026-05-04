import { author } from '../models/Author.js';

class AuthorController {
    static async getAuthor(_, res) {
        try {
            const getAuthor = await author.find({});
            return res.status(200).json(getAuthor);
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - Falha na requisição` });
        }
    }

    static async getAuthorById(req, res) {
        try {
            const id = req.params.id;
            const result = await author.findById(id);
            if (!result) {
                return res.status(404).json({ error: 'Autor não encontrado' });
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - Falha na requisição` });
        }
    }

    static async getAuthorByName(req, res) {
        try {
            const name = req.params.name;
            const result = await author.find({ name });
            if (!result || result.length === 0) {
                return res.status(404).json({ error: 'Autor não encontrado' });
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - Falha na requisição` });
        }
    }

    static async createNewAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body);
            return res.status(201).send({ message: 'Criado com sucesso', author: newAuthor });
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - Falha ao cadastrar autor` });
        }
    }

    static async updateAuthor(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(404).json({ error: 'Autor não encontrado' });
            }
            await author.findByIdAndUpdate(id, req.body);
            return res.status(200).json({ message: 'Autor atualizado com sucesso' });
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - Falha na atualização do autor` });
        }
    }

    static async deleteAuthor(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(404).json({ error: 'Autor não encontrado' });
            }
            await author.deleteOne({ _id: id });
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: `${error.message} - Falha ao deletar o autor` });
        }
    }
}

export default AuthorController;
