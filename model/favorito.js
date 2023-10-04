const fs = require("fs")

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("./model/favoritos.json"))
}

function deletaFavoritoById(id) {
    const livros = JSON.parse(fs.readFileSync("./model/favoritos.json"))
    const livrosFiltrados = livros.filter(livro => livro.id !== id)
    fs.writeFileSync("./model/favoritos.json", JSON.stringify(livrosFiltrados))
    return livrosFiltrados
}

function insereFavorito(id) {
    const favoritos = getTodosFavoritos()
    const favorito = {
        id: id,
    }

    const livro = JSON.parse(fs.readFileSync("./model/livros.json"))
    const livroFavorito = livro.find(livro => livro.id === id)

    if (livroFavorito) {
        favorito.nome = livroFavorito.nome
        favorito.src = livroFavorito.src
        favorito.favorito = true
    } else {
        //é da API do google
        return null
    }

    favoritos.push(favorito)
    fs.writeFileSync("./model/favoritos.json", JSON.stringify(favoritos))
    return favoritos
}

module.exports = { getTodosFavoritos, deletaFavoritoById, insereFavorito }