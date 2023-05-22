const express = require('express');
const data = require('./database/data');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const users = require('./models/users');
const bodyParser = require('body-parser');
const faker = require('faker');
app.use(session({
  secret: 'your-secret-key'
}));
const dbURI = "mongodb+srv://youssef:you123@database.z3i1hgm.mongodb.net/RealEstate?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(express.static('public'));
const port = 3000;

// Define a Schema
const propertySchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: String,
  bedrooms: Number,
  bathrooms: Number,
  area: Number,
});

// Create a Model based on the Schema
const Property = mongoose.model('Property', propertySchema);

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('search');
});

app.get('/filter', async (req, res) => {
  const location = req.query.location;
  const filter = {}; 
  if (location) {
    filter.location = location;
  }

  const filteredData = await Property.find(filter);
  var array = Object.keys(filteredData)
    .map(function (key) {
      return filteredData[key];
    });
  const itemsPerPage = 8;
  const currentPage = parseInt(req.query.page) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedItems = array.slice(startIndex, endIndex);
  const totalPages = Math.ceil(array.length / itemsPerPage);
  res.render('filter', {
    location,
    data: slicedItems,
    currentPage,
    totalPages,

  });
});



