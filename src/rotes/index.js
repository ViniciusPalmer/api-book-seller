import express from 'express';
import author from './authorsRoutes.js';
import book from './booksRoutes.js';

const routes = (app) => {
    app.route('/').get((_, res) => res.status(200).send('Home Page'));

    app.use(express.json(), book, author);
};

export default routes;
