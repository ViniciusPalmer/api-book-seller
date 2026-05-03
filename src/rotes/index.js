import express from 'express';
import book from './booksRoutes.js';

const routes = (app) => {
    app.route('/').get((_, res) => res.status(200).send('Home Page'));

    app.use(express.json(), book);
};

export default routes;
