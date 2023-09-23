const { getTodosLivros } = require("../model/livro.js")
const { getLivroById } = require("../model/livro.js")
const { patchLivro } = require("../model/livro.js")
const { postLivro } = require("../model/livro.js")
const { deleteLivro } = require("../model/livro.js")

function getLivro(req, res) {
    try {
        const id = req.params.id
        const livro = getLivroById(id)
        res.send(livro)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

function getLivros(req, res) {
    try {
       const livros = getTodosLivros()
       res.send(livros)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

function postLivros(req, res) {
    try {
        const livro = postLivro()
        res.send(livro)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

function patchLivros(req, res) {
    try {
        const livro = patchLivro(req.params.id)
        if (livro) {
            res.send(livro)
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
            res.send(livro)
        } else {
            res.status(404).send("Livro não encontrado")
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivros,
    patchLivros,
    deleteLivros
}