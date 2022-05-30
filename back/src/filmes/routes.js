const { Router } = require("Express")
const controller = require("./controller")

const router = Router();

router.get('/', controller.getFilmes)
router.post('/cadastrarEvento', controller.addFilme)
router.post('/teste', controller.teste)

module.exports = router;