<<<<<<< HEAD
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
=======
const mongoose=require('mongoose');
const dbURI = "mongodb+srv://Mario:123@database.z3i1hgm.mongodb.net/RealEstate?retryWrites=true&w=majority";
mongoose.connect(dbURI)
.then(()=>console.log("connected mario"))
.catch((err)=>console.log(err));

//'mongodb://127.0.0.1:27017/LoginTest'
>>>>>>> f6ecb090a3514aded4934c6a7e1df927d93bc5d7
