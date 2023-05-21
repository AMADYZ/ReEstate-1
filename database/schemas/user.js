const { default: mongoose } = require('mongoose');
const mongoos=require('mongoose');
const UserSchema= new mongoos.Schema({
    username:{
        type: mongoos.SchemaTypes.String,
        required: true
    },
    email:{
        type: mongoos.SchemaTypes.String,
        required: true
    },
    phone:{
        type: mongoos.SchemaTypes.String,
        required: true
    },
    pass:{ 
        type: mongoos.SchemaTypes.String,
        required: true
    },
    // pfp: {
    //     type: mongoose.SchemaTypes.String,
    //     required: true
    // },
    // dateCreated: {
    //     type: mongoose.SchemaTypes.Date,
    //     required: true
    // },
    Role:
    {
        type: mongoos.SchemaTypes.String,
        required: true
    }
});

module.exports=mongoos.model('users',UserSchema);
