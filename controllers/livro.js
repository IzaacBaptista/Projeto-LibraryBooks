function getLivros(req, res) {
    try {
        res.send('Você fez uma requisição do tipo GET')
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

function postLivros(req, res) {
    try {
        res.send('Você fez uma requisição do tipo POST')
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

function patchLivros(req, res) {
    try {
        res.send('Você fez uma requisição do tipo PATCH')
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

function deleteLivros(req, res) {
    try {
        res.send('Você fez uma requisição do tipo DELETE')
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

module.exports = {
    getLivros,
    postLivros,
    patchLivros,
    deleteLivros
}