const Router = require('express');
const router = Router();

const chatController = require('../controllers/chatController')

router.post('/', chatController)

module.exports = router;