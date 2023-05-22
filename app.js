const express = require('express');
const data = require('./database/data');
const app = express();
const session = require('express-session');
const users = require('./models/users');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(express.static('public'));
const port = 3000;

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

  res.render('filter', {
data:array
  });
});



