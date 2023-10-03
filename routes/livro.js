const { Router } = require("express")
const { getLivros, getLivro, postLivros, patchLivro, deleteLivros } = require("../controllers/livro")
const { getFavoritos, postFavorito, removeFavoritoById } = require("../controllers/favorito")
const router = Router()

//rotas livros
router.get('/', getLivros)
router.get('/:id', getLivro)
router.post('/', postLivros)
router.patch('/:id', patchLivro)
router.delete('/:id', deleteLivros)

//rotas favoritos
router.get('/favoritos', getFavoritos)
router.post('/favoritos', postFavorito)
router.delete('/favoritos/:id', removeFavoritoById)

module.exports = router