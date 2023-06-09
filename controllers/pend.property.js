const Router = require('express');
const router = Router();
const mongoose = require('mongoose');
const properties1 = require('../database/schemas/properties1')
const user = require('../database/schemas/user');
var nodemailer = require('nodemailer');


let pendProp = {}
let allpendProps = []


let getPendingproperty = async (req, res) => {
    pendProp = await properties1.find({Pending: 'waiting'})
    allpendProps = Array.from(pendProp)
    res.render('pendingproperty', {allProps: allpendProps})
}

let setPropertyPending = async (req, res) => {
  try {
    const { id, Pending } = req.body;
    console.log(id, Pending);
    const update = { $set: { Pending: Pending } };
    let prop = await properties1.findByIdAndUpdate(id, update);
    console.log(prop.username);
    let user1=await user.find().where('username').equals(prop.username);
    console.log(user1[0].email);
    let message="";
    console.log(Pending);
    if(Pending==='true')
    {
      message="accepted"
    }
    else
    {
      message="rejected"
      await properties1.findByIdAndDelete(id);
    }
    console.log(message);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'reestate23amadyz@gmail.com',
        pass: 'wgnqckehjduwbmsp'

      }
    });
    var mailOptions = {
      from: 'reestate23amadyz@gmail.com',
      to: user1[0].email,
      subject: 'Your Property Add Request ',
      text:`Hello ${user1[0].username} 
After checking your Ad with ID:${id} it has been ${message}
Thank you for using ReEstate`};
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

  } catch (error) {
    console.error(error);
   }
};


module.exports = {getPendingproperty, setPropertyPending};