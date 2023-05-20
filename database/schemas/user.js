const mongoos=require('mongoose');
const UserSchema= new mongoos.Schema({
    username:{
        type:mongoos.SchemaTypes.String,
        required:true
    },
    email:{
        type:mongoos.SchemaTypes.String,
        required:true
    },
    phone:{
        type:mongoos.SchemaTypes.String,
        required:true
    },
    pass:{ 
        type:mongoos.SchemaTypes.String,
        required:true
    },
    Role:
    {
        type:mongoos.SchemaTypes.String,
        required:true
    }
    ,Pending:
    {
        type:mongoos.SchemaTypes.String,
        required:true
    }
});

module.exports=mongoos.model('users',UserSchema);






