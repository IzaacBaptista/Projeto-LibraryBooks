const express = require('express');
const rotaLivro = require('./routes/livro');
const rotaFavorito = require('./routes/favorito');
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))
app.use(express.json());

const port = 8000;

app.get('/', (req, res) => {
    res.send('meu server em node');
});

app.use('/livros', rotaLivro);

app.use('/favoritos', rotaFavorito);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});