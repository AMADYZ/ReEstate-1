const Router=require('express');
const router=Router();
const session = require('express-session');
const fileUpload = require('express-fileupload');
const mongoose=require('mongoose');
const bodyparser=require('body-parser'); 
const path = require('path');
require('../database/');
const user = require('../database/schemas/user');
const properties1=require('../database/schemas/properties1');
const addProduct = require('../controllers/add.product')
var nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
router.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
  }));
router.use(fileUpload());


router.get('/',(req, res) =>{
    res.render('addproduct');
})

router.post('/',addProduct);

module.exports = router;