import express from 'express';
import connectDB from './config/dbConnect.js';
import errorHandler from './middlewares/error.js';
import handler404 from './middlewares/handler404.js';
import routes from './rotes/index.js';

const db = await connectDB();
const app = express();
routes(app);

db.on('error', (erro) => {
    console.error('Connection error: ', erro);
});

db.once('open', () => {
    console.log('Database connected');
});

app.get('/', (_, res) => {
    res.status(200).send('Home Page');
});

app.use(handler404);

//? Middleware to handle application errors
app.use(errorHandler)

export default app;

