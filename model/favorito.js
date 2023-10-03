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
    const livros = JSON.parse( fs.readFileSync("./src/model/livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("./model/favoritos.json"))
    const livroInserido = livros.find(livro => livro.id === id)
    const novaListaDeLivroFavoritos = [...favoritos, livroInserido]

    fs.writeFileSync("./model/favoritos.json", JSON.stringify(novaListaDeLivroFavoritos))

    return novaListaDeLivroFavoritos
}

module.exports = { getTodosFavoritos, deletaFavoritoById, insereFavorito }