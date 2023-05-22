const express = require('express');
const session = require('express-session');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const cookieparser=require('cookie-parser');
const app = express();
app.set('view engine','ejs');
app.use(express.static('public'));
require('./database/');
const user = require('./database/schemas/user');
const properties1=require('./database/schemas/properties1');
const { render } = require('ejs');
const { send } = require('process');
app.use(express.urlencoded());
app.use(cookieparser());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
  }));
const server=require('http').createServer(app);
const io=require('socket.io')(server,{cors:{origin:"*"}});
var nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');


app.get('/',(req, res) =>{
    res.render('home');
})

app.get('/personalinfo',(req,res)=>
{
    res.render('personalinfo');
})
app.post('/personalinfo',async(req,res)=>
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
            console.log("el user ya captain")
            res.send({result:'failU',err:"Username is already taken"});
        }
        else{
            console.log("el email ya captain");
            res.send({result:'failE',err1:"Email is already taken"});
        }
    }

   
})

app.get('/login.ejs', async(req,res)=>
{
    const user1=await user.find({});
    Users=Array.from(user1);
    res.render('login');
    
});

app.post('/login.ejs',async(req,res)=>
{
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
        let result=await bcrypt.compare(pass_in, user1[0].pass);
      
        
        if(user1.length==0||!result)
        {
            res.send({error1:"Username is incorrect",error2:"Password is incorrect"});
        }
        else
        {
             res.send({success:"success",Role:user1[0].Role,UserName:user1[0].username,
             Email1:user1[0].email,Phone:user1[0].phone,Pending:user1[0].Pending});
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
              user: 'mario2100022@miuegypt.edu.eg',
              pass: 'mario5*9*2003'
            }
          });
          var mailOptions = {
            from: 'mario2100022@miuegypt.edu.eg',
            to: Email,
            subject: 'PASSWORD CHANGE VERIFICATION',
            text:`For Changing your PASSWORD please Enter the following CODE: ${number}`, 
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
})



server.listen(5000,()=>
{
    console.log("Server is running....."); 
});


