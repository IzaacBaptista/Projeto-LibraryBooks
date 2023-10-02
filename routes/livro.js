const { Router } = require("express")
const { getLivros, getLivro, postLivros, patchLivro, deleteLivros, getLivrosFavoritos } = require("../controllers/livro")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.get('/favoritos', getLivrosFavoritos)

router.post('/', postLivros)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivros)

module.exports = router