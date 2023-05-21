const mongoose=require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.URI
async function connect(){
        await mongoose.connect(uri, (err, client)=>{
            if(err) {
                console.log(`Error occured while connecting to MongoDB:${err}`)
                process.exit(0)
            }
        })
        console.log("Connected to MongoDB")
}

connect()

module.exports = {client: client}
