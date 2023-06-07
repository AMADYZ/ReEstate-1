const mongoos=require('mongoose');
const UserSchema= new mongoos.Schema({
    username:{
        type:mongoos.SchemaTypes.String,
        required:true
    },
    title:{
        type:mongoos.SchemaTypes.String,
        required:true
    },
    condition:{
        type:mongoos.SchemaTypes.String,
        required:true
    },
    type:{
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
        type:mongoos.SchemaTypes.String,
        required:true
    },
    bathrooms:
    {
        type:mongoos.SchemaTypes.String,
        required:true
    }
    ,area:
    {
        type:mongoos.SchemaTypes.String,
        required:true
    },
    locationgps:
    {
        type:mongoos.SchemaTypes.String,
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
    price:
    {
        type:mongoos.SchemaTypes.Number,
        required:true
    },
    adminmessage:
    {
        type:mongoos.SchemaTypes.String,
    },
    comment:
    {
        title:mongoos.SchemaTypes.String,
        text:mongoos.SchemaTypes.String,
    }
}, {timestamps: true});

module.exports=mongoos.model('properties1',UserSchema);





