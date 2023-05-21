const mongoose=require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.URI
mongoose.connect(uri)
  .then(() => {
    console.log('Connected successfully to MongoDB');
})