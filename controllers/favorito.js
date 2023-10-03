const { getTodosFavoritos, insereFavorito, deletaFavoritoById } = require('../model/favorito')

function getFavoritos(req, res) {
    try {
       const livros = getTodosFavoritos()
       res.send(livros)
       res.status(200).send()
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id
        insereFavorito(id)
        res.status(201).send("Livro adicionado aos favoritos")
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

function removeFavoritoById(req, res) {
    try {
        const id = req.params.id
        deletaFavoritoById(id)
        res.status(200).send("Livro excluído com sucesso!")
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

module.exports = { 
    getFavoritos, 
    postFavorito,
    removeFavoritoById
}