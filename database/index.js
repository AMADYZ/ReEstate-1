const mongoose=require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.URI

async function connect(){
    try{
        await mongoose.connect(uri)
        console.log("Connected to MongoDB")
    } catch(error){
        console.error(error)
    }
}

connect()