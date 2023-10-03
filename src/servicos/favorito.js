const fs = require("fs")

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deletaFavoritoById(id) {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))
    const livrosFiltrados = livros.filter(livro => livro.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
    return livrosFiltrados
}

function insereFavorito(id) {
    const livros = JSON.parse( fs.readFileSync("../model/livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))
    const livroInserido = livros.find(livro => livro.id === id)
    const novaListaDeLivroFavoritos = [...favoritos, livroInserido]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivroFavoritos))

    return novaListaDeLivroFavoritos
}

module.exports = { getTodosFavoritos, deletaFavoritoById, insereFavorito }