const express = require('express');
const cookieparser = require('cookie-parser');
const app = express();
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(express.static('public'));
require('./database/');
const properties1 = require('./database/schemas/properties1');
app.use(cookieparser());
const server = require('http').createServer(app);
const dotenv = require('dotenv');
dotenv.config();
app.use(express.urlencoded());

app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
}));

app.use(function(req, res, next) {
  res.locals.username = req.session.username; // Make the username available in templates
  next();
});

// Routes Import
const home = require('./routes/home.js');
const login = require('./routes/login.js');
const personalinfo = require('./routes/personalinfo.js');
const addproduct = require('./routes/addproduct.js');
const about = require('./routes/about.js');
const design = require('./routes/design.js');
const contact = require('./routes/contact');
const search = require('./routes/search');
const filter = require('./routes/filter');
const details = require('./routes/details');
const myproducts = require('./routes/myproducts');
const editdetails = require('./routes/editdetails');
const admin = require('./routes/admin')
const addcustomer = require('./routes/addcustomer')
const allusers = require('./routes/users')
const addPropForm = require('./routes/addproperty.admin')
const pendadmins = require('./routes/pend.admins')
const pendingproperty = require('./routes/pendingproperty')
const listing=require('./routes/listing')
const compare=require('./routes/compare')
const wishlist=require('./routes/wishlist')
const chatControl = require('./routes/chat')



// Routes setup
app.use('/', home);
app.use('/login', login);
app.use('/personalinfo', personalinfo);
app.use('/addproduct', addproduct);
app.use('/about', about);
app.use('/design', design);
app.use('/contact', contact);
app.use('/search', search);
app.use('/filter', filter);
app.use('/details', details);
app.use('/details', details);
app.use('/myproducts', myproducts);
app.use('/editdetails', editdetails);
app.use('/dashboard', admin);
app.use('/customers', addcustomer);
app.use('/users', allusers)
app.use('/addproperty', addPropForm)
app.use('/pendadmins', pendadmins)
app.use('/pendingproperty', pendingproperty)
app.use('/listing',listing );
app.use('/compare',compare );
app.use('/wishlist',wishlist);
app.use('/chat', chatControl)


server.listen(8080, () => {
  console.log("Server is running.....");
});