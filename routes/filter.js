const Router = require('express');
const router = Router();
const properties1 = require('../database/schemas/properties1');
const user1 = require('../database/schemas/user');
const session = require('express-session');
require('../database/');
const filter1=require("../controllers/filter_conteoller");



router.get('/', filter1);

module.exports = router;