const Router=require('express');
const router=Router();
const session = require('express-session');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const mongoose=require('mongoose');
const bodyparser=require('body-parser'); 
const path = require('path');
require('../database/');
const user = require('../database/schemas/user');
const properties1=require('../database/schemas/properties1');
var nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
router.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
  }));
router.use(fileUpload());
let id;


router.get('/', async (req, res) => {
     id = req.query.id;
    const search =await properties1.findById(id);
    let name =search.username;
    let user1= await user.find().where("username").equals(name);
    res.render('editdetails', { search,user1 });
  });

  router.post('/', async (req, res) => {
    let imageFiles
    let username=req.body.username;
    let type=req.body.type;
    let condition=req.body.condition;
    let description=req.body.description;
    let area=req.body.area;
    let price=req.body.price;
    let loc=req.body.loc;
    let locationgps=req.body.locationgps;
    let bathrooms=req.body.bathrooms;
    let bedrooms=req.body.bedrooms;
    let title=req.body.title;
    price = parseInt(price.replace(/,/g, ''));
    console.log(price);
    const tobedeleted = req.body.tobedeleted;
    const defaultimgs = req.body.myimgs;
    let pro=await properties1.findById(id);
    let code=pro.code;
    username=username.replace(/\s/g,"");
    title=title.replace(/\s/g,"");
    const totlength = username.length + title.length + code.length;
    lengthofdefault=defaultimgs.length;
    let lastimg=defaultimgs[lengthofdefault-1].replace(/\s/g,"");
    let index1=lastimg[totlength];
    index1++;
    
 

    try {
      imageFiles = req.files.imageFile;
      let extentions=[];
      let names=[];
      let endofimg=[];
      imageFiles.forEach((imageFile)=>
      {
      extentions.push(imageFile.mimetype);
      names.push(imageFile.name);
      if(imageFile.mimetype==="image/png")
      {
        endofimg.push(".png");
      }
      else if(imageFile.mimetype==='image/jpeg')
      {
        endofimg.push(".jpeg");
      }
      else if(imageFile.mimetype==='image/webp')
      {
        endofimg.push(".webp");
      }
      
      })
      for(let i=0;i<names.length;i++)
      {
        names[i]=username+title+code+index1+endofimg[i];
        index1++;
      }

      let fullarray=defaultimgs.concat(names);

    //   // __________________________________________________________
      let newpro = {
        $set: {
          type: type,
          condition: condition,
          description: description,
          area: area,
          price: price,
          location: loc,
          locationgps: locationgps,
          bathrooms: bathrooms,
          bedrooms: bedrooms,
          images:fullarray,
        }
      }
      
     




      let counter=0;
      imageFiles.forEach((imageFile) => {

        const uploadPath = path.join(__dirname, '../public/images/uploaded', names[counter]);
        counter++;
        imageFile.mv(uploadPath, (error) => {
          if (error) {
            console.error(error);
            return res.status(500).send('Failed to move one or more files');
          }
        });
      });
      
      if(tobedeleted)
      { 
      tobedeleted.forEach((img)=>
      {
        const filepath = path.join(__dirname, '../public/images/uploaded', img);
        // let filepath=`../public/images/uploaded/${img}`
        fs.unlink(filepath, (err) => {
          if (err) console.error(err);
        })
      })
    }
    

    await properties1.updateOne({_id: id}, newpro)
    res.send(id);

      


    } catch (error) {//law mafish images gedida
      if(tobedeleted)
      { 
      tobedeleted.forEach((img)=>
      {
        const filepath = path.join(__dirname, '../public/images/uploaded', img);
        // let filepath=`../public/images/uploaded/${img}`
        fs.unlink(filepath, (err) => {
          if (err) console.error(err);
        })
      })
    }
      console.log(defaultimgs);
      let newpro = {
        $set: {
          type: type,
          condition: condition,
          description: description,
          area: area,
          price: price,
          location: loc,
          locationgps: locationgps,
          bathrooms: bathrooms,
          bedrooms: bedrooms,
          images:defaultimgs,
        }
      }
      await properties1.updateOne({_id: id}, newpro)
      res.send(id);








    }
  
    // console.log("images default ")
    // console.log(defaultimgs);
    // console.log("new imges inserted")
    // console.log(imageFiles);
    // console.log("deleted imgs")
    // console.log(tobedeleted);

    



  
    //console.log(pro);



    


  });




  module.exports = router;