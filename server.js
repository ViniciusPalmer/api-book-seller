import app from './src/app.js';

const PORT = 3000;

const rotes = {
    '/': 'home',
    '/livros': 'Books Page'
};

app.listen(PORT, () => {
    console.log('Server running at http://localhost:3000/');
});

