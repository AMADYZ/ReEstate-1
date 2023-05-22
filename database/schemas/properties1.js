const mongoos=require('mongoose');
const UserSchema= new mongoos.Schema({
    username:{
        type:mongoos.SchemaTypes.String,
        required:true
    },
    location:{
        type:mongoos.SchemaTypes.String,
        required:true
    },
    description:{
        type:mongoos.SchemaTypes.String,
        required:true
    },
    bedrooms:{ 
        type:mongoos.SchemaTypes.Number,
        required:true
    },
    bathrooms:
    {
        type:mongoos.SchemaTypes.Number,
        required:true
    }
    ,area:
    {
        type:mongoos.SchemaTypes.Number,
        required:true
    },
    urllocation:
    {
        type:mongoos.SchemaTypes.String,
        required:true
    },
    images:
    {
        type:[String],
        required:true
    },


});

module.exports=mongoos.model('properties1',UserSchema);






