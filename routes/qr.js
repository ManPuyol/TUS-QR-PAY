const app = require('express')
const qrController = require('../controllers/qrController')
const router = app.Router()

router.get('/generate', qrController.getQR)
router.post('/confirm', qrController.confirmPass)

module.exports = router