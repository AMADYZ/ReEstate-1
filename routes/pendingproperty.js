const Router = require('express');
const router = Router();
const {getPendingproperty,setPropertyPending} = require('../controllers/pend.property.js')

router.get('/', getPendingproperty)

router.put('/', setPropertyPending);

module.exports = router