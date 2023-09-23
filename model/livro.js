const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("./model/livros.json"))
}

function getLivroById(id) {
    const livros = getTodosLivros()
    const livro = livros.find(livro => livro.id === id)
    if (livro) {
        return livro
    } else {
        return null
    }
}

function patchLivro(id) {
    const livros = getTodosLivros()
    const livro = livros.find(livro => livro.id === id)
    if (livro) {
        livro.emprestado = !livro.emprestado
        fs.writeFileSync("./model/livros.json", JSON.stringify(livros))
        return livro
    } else {
        return null
    }
}

function postLivro(body) {
    const livros = getTodosLivros()
    const livro = {
        id: (livros.length + 1).toString(),
        nome: body.nome,
        src: "https://source.unsplash.com/random",
    }
    livros.push(livro)
    fs.writeFileSync("./model/livros.json", JSON.stringify(livros))
    return livro
}

function deleteLivro(id) {
    const livros = getTodosLivros()
    const livro = livros.find(livro => livro.id == id)
    if (livro) {
        livros.splice(livros.indexOf(livro), 1)
        fs.writeFileSync("./model/livros.json", JSON.stringify(livros))
        return livro
    } else {
        return null
    }
}

module.exports = {
    getTodosLivros,
    getLivroById,
    patchLivro,
    postLivro,
    deleteLivro
}