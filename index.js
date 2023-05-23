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
const { send } = require('process');
const property = require('./database/schemas/property')
app.use(express.urlencoded());
app.use(cookieparser());
app.use(session({ secret: 'Your_Secret_Key' }));
const server=require('http').createServer(app);
const io=require('socket.io')(server,{cors:{origin:"*"}});
var nodemailer = require('nodemailer');


let Users=[]
let allProp = []
let allUsers = []

app.get('/',(req, res) =>{
    res.render('home');
    console.log(req.query.username)

})
app.post('/personalinfo',(req,res)=>
{
   
})
app.get('/personalinfo',(req,res)=>
{
    res.render('personalinfo');
})

app.get('/login.ejs', async(req,res)=>
{
    const user1=await user.find({});
    Users=Array.from(user1);
    res.render('login');
});

app.post('/login(.ejs)?',async(req,res)=>
{
    let{username,email,phone,pass,cpass,Role,page}=req.body;
    let{username_in,pass_in,page1}=req.body;
    let{Email,page2}=req.body;
    let{newpass,confpass,Email1}=req.body;
    if(page=="signup")
    {
        let user1=await user.find().where('username').equals(username).where("email").equals(email);
        if(user1.length==0)
        {
            
            user.create({username,email,phone,pass,Role});
            res.send("success");
        }
        else
        {
            res.send({error1:"Username is already taken",error2:"Email is already taken"});
        }
        user1=undefined; 
    }
    else if(page1=="signin")
    {
        let user1=await user.find().where('username').equals(username_in).where("pass").equals(pass_in);
        console.log(user1)
        if(user1.length==0)
        {
            res.send({error1:"Username is incorrect",error2:"Password is incorrect"});
        }
        else
        {
             res.send({success:"success",Role:user1[0].Role,UserName:user1[0].username,
             Email1:user1[0].email,Phone:user1[0].phone});
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
              pass: 'mario'
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
          res.send({success:"success",number:number,email:Email});
      }
   }
   else
   {
        let user1=await user.findOneAndUpdate(
        {email:Email1},
        {pass:newpass} 
        );
        res.send({success:"success"});


   }
})
let users = {}
let props = {}
//DashBoard Requests
app.get('/dashboard(.ejs)?',async (req, res) =>{
    users = await user.find({})
    props = await property.find({})
    allProp=Array.from(props);
    allUsers = Array.from(users)
    const totalPrice = allProp.reduce((accumulator, item) => {
        return accumulator + item.price;
    }, 0);
    const locationCounts = allProp.reduce((countMap, obj) => {
        const location = obj.location;
        countMap[location] = (countMap[location] || 0) + 1;
        return countMap;
    }, {});
    const sortedLocations = Object.keys(locationCounts).sort((a, b) => locationCounts[b] - locationCounts[a]);
    const top3Locations = sortedLocations.slice(0, 3);
    const top3Objects = allProp.filter(obj => top3Locations.includes(obj.location)).slice(0 , 3).map(obj => obj.location)
    const data = {
        avgPrice: `${Math.ceil(totalPrice/allProp.length)} EGP`,
        noOfUsers: users.length,
        top3Objects: top3Objects,
        percentp: 75,
        percentu: 45
    }
    res.render('dashboard',{data});
})

//Customers Requests

app.get('/customers(.ejs)?', async(req, res) =>{
    users = await user.find({})
    res.render('customers', {users})
})

app.post('/customers(.ejs)?', async(req, res)=> {
    let username_in = req.body.username_inp
    let password_in = req.body.password_inp
    let email_in = req.body.email_inp
    let phone_in = req.body.phone_inp
    let checkboxChecked = req.body.admin_check === 'checked'

    if(checkboxChecked){
        await user.create({
            username: username_in,
            email: email_in,
            phone: phone_in,
            pass: password_in,
            Role: 'Admin'
        });
    } else{
        await user.create({
            username: username_in,
            email: email_in,
            phone: phone_in,
            pass: password_in,
            Role: 'User'
        });
    }
})

app.get('/users(.ejs)?', async (req, res) =>{
    users = await user.find({})
    allUsers = Array.from(users)
    res.render('users', {allUsers: allUsers})
})
app.get('/addproperty(.ejs)?',(req, res) =>{
    res.render('addproperty')
})


server.listen(5000,()=>
{
    console.log("Server is running....."); 
});



// io.on("connection",(socket)=>
// {
//    console.log("user connected"+socket.id);
   
//     socket.on("message",(data1,data2,data3,data4,page,Role)=>//2
//     {
//         if(page==="signin")
//         {
//         for(let i=0;i<Users.length;i++)
//         
//             if(Users[i].username===data1&&Users[i].pass===data2)
//             {
//                 index=i;
//                 global=true;
//                 break;
//             }   
//         }
//         if(global==false)
//         {
//             socket.emit("message",global,"Anything",page);//3.1
//         }
//         else{
//             socket.emit("message",global,Users[index].Role,page);//3.1

//         }
      
//        before=global;
//        global=false;
//        }

//        else{
        
//         for(let i=0;i<Users.length;i++)
//         {
//             if(Users[i].username===data1&&Users[i].email===data2)
//             {
//                 userdb=true;
//                 break;
//             }   
//         }
       
//         if(userdb)
//         {
//             console.log("mesh hansagel")
//             socket.emit("message",false,"anything",page);//3.2
//             before=false;
//             userdb=false;
//         }
//         else
//         {
//             console.log("hansagel")
//              if(Role)
//              Role='admin'
//              else
//              Role='user'
//              username=data1;
//              email=data2;
//              phone=data3;
//              pass=data4;
//              user.create({username,email,phone,pass,Role});
//              before=true;
//              userdb=false;
//         }
//        }
//     })
    

// });

