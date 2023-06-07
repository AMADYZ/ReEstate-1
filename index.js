    const express = require('express');   
    const cookieparser=require('cookie-parser');
    const app = express();
    app.set('view engine','ejs');
    app.use(express.static('public'));
    require('./database/');
    const properties1=require('./database/schemas/properties1');
    app.use(cookieparser());
    const server=require('http').createServer(app);
    const dotenv=require('dotenv');
    dotenv.config();
    app.use(express.urlencoded());



//Routes Import
const home = require('./routes/home.js');
const login = require('./routes/login.js');
const personalinfo = require('./routes/personalinfo.js');
const addproduct=require('./routes/addproduct.js')
const about=require('./routes/about.js')
const design=require('./routes/design.js')
const contact=require('./routes/contact')
const admin = require('./routes/admin')
const addcustomer = require('./routes/addcustomer')
const allusers = require('./routes/users')
const addPropForm = require('./routes/addproperty.admin')
const pendadmins = require('./routes/pend.admins')
const pendingproperty = require('./routes/pendingproperty')




//Routes setup
app.use('/', home);
app.use('/login', login);
app.use('/personalinfo', personalinfo);
app.use('/addproduct',addproduct);
app.use('/about', about);
app.use('/design', design);
app.use('/contact', contact);
app.use('/dashboard', admin);
app.use('/customers', addcustomer);
app.use('/users', allusers)
app.use('/addproperty', addPropForm)
app.use('/pendadmins', pendadmins)
app.use('/pendingproperty', pendingproperty)


server.listen(6971,()=>
{
    console.log("Server is running....."); 
});


