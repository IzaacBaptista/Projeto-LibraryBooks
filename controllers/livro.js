const { getTodosLivros, getLivroById, postLivro, patchLivroById, deleteLivro, getLivrosByFavoritos } = require('../model/livro')

function getLivro(req, res) {
    try {
        const id = req.params.id
        const livro = getLivroById(id)
        res.send(livro)
        res.status(200).send()
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

function getLivros(req, res) {
    try {
       const livros = getTodosLivros()
       res.send(livros)
       res.status(200).send()
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

function postLivros(req, res) {
    try {
        const body = req.body
        const livro = postLivro(body)
        res.send(livro)
        res.status(201).send()
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id
        const body = req.body
        const livro = patchLivroById(id, body)
        if (livro) {
            res.send(livro)
            res.status(200).send()
        } else {
            res.status(404).send("Livro não encontrado")
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

function deleteLivros(req, res) {
    try {
        const livro = deleteLivro(req.params.id)
        if (livro) {
            res.status(200).send("Livro excluído com sucesso!")
        } else {
            res.status(404).send("Livro não encontrado")
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

function getLivrosFavoritos(req, res) {
    try {
        const livros = getLivrosByFavoritos()
        const livrosFavoritos = livros.filter(livro => livro.favorito)
        res.send(livrosFavoritos)
        res.status(200).send()
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivros,
    patchLivro,
    deleteLivros,
    getLivrosFavoritos
}