const Router=require('express');
const router=Router();
const properties1=require('../database/schemas/properties1');
const user1=require('../database/schemas/user');
const session = require('express-session');
require('../database/');

router.get('/', async (req, res) => {
res.render('listing')
})
module.exports = router;