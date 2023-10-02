const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("./model/livros.json"))
}

function getLivrosByFavoritos() {
    const livros = getTodosLivros()
    const livrosFavoritos = livros.filter(livro => livro.favorito === true)
    return livrosFavoritos
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

function patchLivroById(id, body) {
    const livros = getTodosLivros();
    const livroIndex = livros.findIndex(livro => livro.id === id);

    if (livroIndex !== -1) {
        livros[livroIndex].nome = body.nome;
        fs.writeFileSync("./model/livros.json", JSON.stringify(livros));
        return livros[livroIndex];
    } else {
        return null;
    }
}

function postLivro(body) {
    const livros = getTodosLivros()
    const livro = {
        id: (livros.length + 1).toString(),
        nome: body.nome,
        src: "https://source.unsplash.com/130x190/?book",
    }
    livros.push(livro)
    fs.writeFileSync("./model/livros.json", JSON.stringify(livros))
    return livro
}

function deleteLivro(id) {
    const livros = getTodosLivros()
    const livro = livros.find(livro => livro.id === id)
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
    patchLivroById,
    postLivro,
    deleteLivro,
    getLivrosByFavoritos
}