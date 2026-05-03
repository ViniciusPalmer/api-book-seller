import express from 'express';
import connectDB from './config/dbConnect.js';
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

export default app;

