const mongoos=require('mongoose');
const UserSchema= new mongoos.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    pass:{ 
        type:String,
        required:true
    },

});
module.exports= mongoos.model('users',UserSchema);
