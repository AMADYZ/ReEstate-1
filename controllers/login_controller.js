const Router=require('express');
const router=Router();
const session = require('express-session');
const mongoose=require('mongoose');
const bodyparser=require('body-parser'); 
require('../database/');
const user = require('../database/schemas/user');
var nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
router.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
  }));

let errornum=3;
let registration= async (req,res)=>
{
    let sharedusername="";
    let{username,email,phone,pass1,cpass,Role,page,Pending}=req.body;
    let{username_in,pass_in,page1}=req.body;
    let{Email,page2}=req.body;
    let{val1,val2,val3,val4,page3}=req.body;
    let{newpass}=req.body;
    if(page=="signup")
    {
        let user1=await user.find().where('username').equals(username);
        let user2=await user.find().where("email").equals(email);
        if(user1.length==0&&user2.length==0)
        {
                      
            const pass= await bcrypt.hash(pass1, 10);
            user.create({username,email,phone,pass,Role,Pending});
            res.send({result:"success",pending1:Pending,UserName:username,Email:email,
            Phone:phone,Role:Role});
            req.session.username =username;
            req.session.save();
        }
        else
        {
            res.send({error1:"Username is already taken",error2:"Email is already taken"});
        }
        user1=undefined; 
    }
    else if(page1=="signin")
    {
      let user1=await user.find().where('username').equals(username_in);
        let result=false;
        if(user1.length>0)
        {
         result=await bcrypt.compare(pass_in, user1[0].pass);
        }
      
        
        if(user1.length==0||!result)
        {
          errornum--;
          if(errornum==0)
          {
            res.send({error1:"Username is incorrect",error2:"Password is incorrect",num:0});
            errornum=3;
          }
          else
          {
            res.send({error1:"Username is incorrect",error2:"Password is incorrect",num:3});
          }
            
        }
        else
        {
             sharedusername=username;
             res.send({success:"success",Role:user1[0].Role,UserName:user1[0].username,
             Email1:user1[0].email,Phone:user1[0].phone,Pending:user1[0].Pending});
             req.session.username = user1[0].username;
             req.session.save();
        }
    }
    else if(page2=='emailsend')
    {
        let user1=await user.find().where('email').equals(Email);
        if(user1.length==0)
        {
            res.send({success:"fail"});//ma3naha 2no email mesh mawgod fy db
        }
        else{
        const min = 1000; // Minimum value (inclusive)
        const max = 9999; // Maximum value (inclusive)
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        let number=randomNumber;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'reestate23amadyz@gmail.com',
              pass: 'wgnqckehjduwbmsp'
            }
          });
          var mailOptions = {
            from: 'reestate23amadyz@gmail.com',
            to: Email,
            subject: 'PASSWORD CHANGE VERIFICATION',
            text:`Hello ${user1[0].username} 
For changing your PASSWORD please enter the following code: ${number}`, 
                };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          req.session.passcode = number;
          req.session.email=Email
          res.send({success:"success"});
      }
   }
   else if(page3==="codepage")
   {
      let num=req.session.passcode
      let thousands = Math.floor(num / 1000);
      let hundreds = Math.floor((num % 1000) / 100);
      let tens = Math.floor((num % 100) / 10);
      let ones = num % 10;
      
      if(val1==thousands&&val2==hundreds&&val3==tens&&val4==ones)
      {
        res.send({success:"success"});
      }
      else
      {
        res.send({success:"fail"});
      }
   }
   else
     {
        let Email1=req.session.email;
        const pass= await bcrypt.hash(newpass, 10);
        let user1=await user.findOneAndUpdate(
            {email:Email1},
            {pass:pass} 
        );
        res.send({success:"success"});
     }
}
module.exports=registration;