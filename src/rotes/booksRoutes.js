import express from 'express';
import BookController from '../controllers/bookController.js';
import pagination from '../middlewares/pagination.js';

const routes = express.Router();

routes.get('/livros', BookController.getBooks, pagination);
routes.get('/livros/busca', BookController.searchBooks);
routes.get('/livros/:id', BookController.getBookById);
routes.post('/livros', BookController.createNewBook);
routes.put('/livros/:id', BookController.updateBook);
routes.delete('/livros/:id', BookController.deleteBook);

export default routes;
