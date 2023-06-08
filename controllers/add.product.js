const session = require('express-session');
const fileUpload = require('express-fileupload');
const mongoose=require('mongoose');
const bodyparser=require('body-parser'); 
const path = require('path');
require('../database/');
const user = require('../database/schemas/user');
const properties1=require('../database/schemas/properties1');
var nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

let addProduct = (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
      let imageFiles = req.files.imageFile;
      let username=req.body.username;
      let title=req.body.title;
      let type=req.body.type;
      let condition=req.body.condition;
      let description=req.body.description;
      let area=req.body.area;
      let price=req.body.price;
      let loc=req.body.loc;
      let urllocation=req.body.URL;
      let locationgps=req.body.locationgps;
      let bathrooms=req.body.bathrooms;
      let bedrooms=req.body.bedrooms;
      let Pending=req.body.Pending;
    
      let extentions=[];
      let names=[];
      let endofimg=[];
      var length = 5;
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      var code = '';
    
     
    
    
      // get the name and extention of every image
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
      
      //generating the code for images
      for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
      }
    
    
    
    
      console.log(names);
      console.log(endofimg);
      //change the name of every image
      for(let i =0;i<names.length;i++)
      {
        names[i]=username+title+code+i+endofimg[i];
      }
      let images=names;
    
      let location=loc;
    
    
      properties1.create({username,title,location,code,
       locationgps,description,type,condition,bedrooms
      ,bathrooms,area,urllocation,images,price,Pending:Pending});
    
    
       
    
      
    
    //store the images in the public file
      if (!Array.isArray(imageFiles)) {
        imageFiles = [imageFiles];
      }
      let counter=0
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
    
      res.send('success');
}

module.exports = addProduct