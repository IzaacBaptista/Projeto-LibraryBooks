const { Router } = require("express")
const { getFavoritos, postFavorito, removeFavoritoById } = require("../controllers/favorito")
const router = Router()

router.get('/', getFavoritos)
router.post('/:id', postFavorito)
router.delete('/:id', removeFavoritoById)

module.exports = router