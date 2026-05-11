import express from 'express';
import AuthorController from '../controllers/authorController.js';
import pagination from '../middlewares/pagination.js';

const routes = express.Router();

routes.get('/autores', AuthorController.getAuthor, pagination);
routes.get('/autores/:id', AuthorController.getAuthorById);
routes.get('/autores/:name', AuthorController.getAuthorByName);
routes.post('/autores', AuthorController.createNewAuthor);
routes.put('/autores/:id', AuthorController.updateAuthor);
routes.delete('/autores/:id', AuthorController.deleteAuthor);

export default routes;
