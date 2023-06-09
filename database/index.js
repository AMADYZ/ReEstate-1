const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const dbURI ="mongodb+srv://Mario:123@database.z3i1hgm.mongodb.net/RealEstate?retryWrites=true&w=majority";
mongoose.connect(dbURI)
.then(()=>console.log("connected mario"))
.catch((err)=>console.log(err));

// mongodb://127.0.0.1:27017/LoginTest

//