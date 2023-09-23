const express = require('express');
const rotaLivro = require('./routes/livro');

const app = express();
app.use(express.json());

const port = 8000;

app.get('/', (req, res) => {
    res.send('meu server em node');
});

app.use('/livros', rotaLivro);


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});