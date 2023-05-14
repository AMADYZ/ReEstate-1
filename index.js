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
const { render } = require('ejs');
app.use(express.urlencoded());
app.use(cookieparser());
app.use(session({ secret: 'Your_Secret_Key' }));
const server=require('http').createServer(app);
const io=require('socket.io')(server,{cors:{origin:"*"}});


let Users=[];
let data1,data2;
let global=false;
let global2=true;
let index=0;
let before=false;
let userdb=false;




app.get('/',(req, res) =>{
    res.render('home');
    console.log(req.session.user);
})

app.get('/login.ejs', async(req,res)=>
{
    const user1=await user.find({});
    Users=Array.from(user1);
    res.render('login');

});

app.post('/login.ejs',async(req,res)=>
{
    let {username,email,phone,pass,Role}=req.body;
    let{username_in,password_in}=req.body;
    
    if(username===undefined)//sign in
    {
        if(before)
        {
            res.redirect('/');
        }
    }
    else{//sign up
        if(before)
        res.redirect('/');
    }
})




server.listen(5000,()=>
{
    console.log("Server is running....."); 
});



io.on("connection",(socket)=>
{
   console.log("user connected"+socket.id);
   
    socket.on("message",(data1,data2,data3,data4,page,Role)=>//2
    {
        if(page==="signin")
        {
        for(let i=0;i<Users.length;i++)
        {
            if(Users[i].username===data1&&Users[i].pass===data2)
            {
                index=i;
                global=true;
                break;
            }   
        }
        if(global==false)
        {
            socket.emit("message",global,"Anything",page);//3.1
        }
        else{
            socket.emit("message",global,Users[index].Role,page);//3.1

        }
      
       before=global;
       global=false;
       }

       else{
        
        for(let i=0;i<Users.length;i++)
        {
            if(Users[i].username===data1&&Users[i].email===data2)
            {
                userdb=true;
                break;
            }   
        }
       
        if(userdb)
        {
            console.log("mesh hansagel")
            socket.emit("message",false,"anything",page);//3.2
            before=false;
            userdb=false;
        }
        else
        {
            console.log("hansagel")
             if(Role)
             Role='admin'
             else
             Role='user'
             username=data1;
             email=data2;
             phone=data3;
             pass=data4;
             user.create({username,email,phone,pass,Role});
             before=true;
             userdb=false;
        }
       }
    })
    

});



