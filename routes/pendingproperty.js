const Router = require('express');
const router = Router();
const {getPendingproperty,setPropertyPending} = require('../controllers/pend.property.js')

router.get('/', getPendingproperty)

router.post('/', setPropertyPending);

module.exports = router