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

function patchLivroById(id, body) {
    const livros = getTodosLivros();
    const livroIndex = livros.findIndex(livro => livro.id === id);

    if (livroIndex !== -1) {
        // Update the 'nome' property of the existing livro object
        livros[livroIndex].nome = body.nome;

        // Write the updated array back to the JSON file
        fs.writeFileSync("./model/livros.json", JSON.stringify(livros));

        // Return the updated livro object
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
    patchLivroById,
    postLivro,
    deleteLivro
}