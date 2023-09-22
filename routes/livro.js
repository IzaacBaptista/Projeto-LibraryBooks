const { Router } = require("express")
const { getLivros } = require("../controllers/livro")
const { postLivros } = require("../controllers/livro")
const { patchLivros } = require("../controllers/livro")
const { deleteLivros } = require("../controllers/livro")

const router = Router()

router.get('/', getLivros)

router.post('/', postLivros)

router.patch('/', patchLivros)

router.delete('/', deleteLivros)

module.exports = router