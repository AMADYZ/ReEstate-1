const Router=require('express');
const router=Router();
const registration=require("../controllers/login_controller.js")
const session = require('express-session');
const mongoose=require('mongoose');
const bodyparser=require('body-parser'); 
require('../database/');
const user = require('../database/schemas/user');
var nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
router.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
  }));




router.get('/', async(req,res)=>
{
    res.render('login');
});
router.post('/',registration);


module.exports = router;