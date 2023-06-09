const Router=require('express');
const router=Router();
const session = require('express-session');
const mongoose=require('mongoose');
const bodyparser=require('body-parser'); 
require('../database/');
const user = require('../database/schemas/user');
var nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');


  let personalinfo= async (req,res)=>
{
    let{newusername,newemail,newphone,olduser,oldemail}=req.body;
    let user1='',user2=''
    if(newusername!=olduser)
    {
         user1=await user.find().where('username').equals(newusername);
    }
    if(newemail!=oldemail)
    {
         user2=await user.find().where('email').equals(newemail);
    }

    if(user1.length==0&&user2.length==0)
    {
        await user.findOneAndUpdate(
            {username:olduser},
            {username:newusername},
        );
        await user.findOneAndUpdate(
            {username:newusername},
            {email:newemail},
        );
        await user.findOneAndUpdate(
            {username:newusername},
            {phone:newphone},
        );
        res.send({result:'success',new1:newusername,new2:newemail,new3:newphone});
    }
    else
    {
        if(user1.length>0)
        {
            res.send({result:'failU',err:"Username is already taken"});
        }
        else{
            res.send({result:'failE',err1:"Email is already taken"});
        }
    }
  
}
module.exports=personalinfo;