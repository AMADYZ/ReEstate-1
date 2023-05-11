const express = require('express');
const session = require('express-session');
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const cookieparser=require('cookie-parser')
const app = express();
app.set('view engine','ejs');
app.use(express.static('public'));
require('./database/');
const user = require('./database/schemas/user');
const { render } = require('ejs');
app.use(express.urlencoded());
app.use(cookieparser());
app.use(session({ secret: 'Your_Secret_Key' }));






app.get('/',(req, res) =>{
    res.render('home',{errors:''});
    console.log(req.session.user);
})

app.get('/login.ejs',(req,res)=>
{
    res.render('login');

});

app.post('/login.ejs',async(req,res)=>
{
    let {username,email,phone,pass,Role}=req.body;
    let{username_in,password_in}=req.body;
    
    if(username===undefined)
    {
        let user2=[];
        let j=-1;
        const user1=await user.find({});
        user2=Array.from(user1);
        for(let i=0;i<user2.length;i++)
        {
            if(user2[i].username===username_in)
            {
                if(user2[i].pass===password_in)
                {
                   j=i;
                }
                
            }
        }
        res.json({
            "Role":user2[j].Role
        });
        
        // res.cookie("Role","mario",{maxAge:10000});
       

        
    }
    else{
    const userdb= await user.findOne({ $or :[{username},{ email }]});
     if(userdb)
     {
        console.log("cannot create")
     }
     else
     {
        if(Role==='on')
        Role='admin'
        else
        Role='user'
         const newuser=await user.create({username,email,phone,pass,Role});
         req.session.user=username;
         res.redirect('/');
     }
    }
})


app.listen(5000);


