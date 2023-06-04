const express = require('express');   
const cookieparser=require('cookie-parser');
const app = express();
const session = require('express-session');
app.set('view engine','ejs');
app.use(express.static('public'));
require('./database/');
const properties1=require('./database/schemas/properties1');
app.use(cookieparser());
const server=require('http').createServer(app);
const dotenv=require('dotenv');
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true
  }));
  
  app.use(function(req, res, next) {
    res.locals.personal = req.session.personal;
    next();
  });
  

//Routes Import
const home = require('./routes/home.js');
const login = require('./routes/login.js');
const personalinfo = require('./routes/personalinfo.js');
const addproduct=require('./routes/addproduct.js')
const about=require('./routes/about.js')
const design=require('./routes/design.js')
const contact=require('./routes/contact')
const search=require('./routes/search')
const filter=require('./routes/filter')
const details=require('./routes/details')
const listing=require('./routes/listing')


//Routes setup
app.use('/', home);
app.use('/login', login);
app.use('/personalinfo', personalinfo);
app.use('/addproduct',addproduct);
app.use('/about', about);
app.use('/design', design);
app.use('/contact', contact);
app.use('/search', search);
app.use('/filter', filter);
app.use('/details',details );
app.use('/listing',listing );


server.listen(5000,()=>
{
    console.log("Server is running....."); 
});


