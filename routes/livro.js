const { Router } = require("express")
const { getLivros, getLivro, postLivros, patchLivro, deleteLivros } = require("../controllers/livro")
const router = Router()

router.get('/', getLivros)
router.get('/:id', getLivro)
router.post('/', postLivros)
router.patch('/:id', patchLivro)
router.delete('/:id', deleteLivros)

module.exports = router