const express = require('express');
const bc = require('./controllers/books_controller');
const app = express();

app.use(express.json());

app.get('/api/books', bc.read);
app.post('/api/books', bc.create );
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.delete);

const port = 4000;

app.listen(port, () => console.log(`Good evnin guv'na on port ${port}`))