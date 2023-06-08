const Router=require('express');
const router=Router();
const session = require('express-session');
const mongoose=require('mongoose');
const bodyparser=require('body-parser'); 
require('../database/');
const personalinfo=require("../controllers/personalinfo_controller")
const user = require('../database/schemas/user');
var nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
router.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
  }));



router.get('/',(req,res)=>
{
 
    res.render('personalinfo');
})
router.post('/',personalinfo)

module.exports = router;