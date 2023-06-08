const Router=require('express');
const router=Router();
const properties1=require('../database/schemas/properties1');
const user1=require('../database/schemas/user');
const session = require('express-session');
const user = require('../database/schemas/user');

require('../database/');
router.get('/', async (req, res) => {
    const id = req.query.id;
    const search =await properties1.findById(id);
    let name =search.username;
    let title_name=search.title;
    let user1= await user.find().where("username").equals(name);
    const regex = new RegExp(title_name, 'i');
    const limit = 6;
    const similar=await properties1.find({title: regex}).limit(limit);
    req.session.personal=name;
    req.session.save();
    res.render('details', { search,user1,similar});
  });

  router.post('/', async(req,res)=>
  {
    const { title, text, id } = req.body;
    const updatedProperty = await properties1.findByIdAndUpdate(
      id,
      { $push: { comment: { title: title, text: text } } },
      { new: true }
    );
    if (updatedProperty) {
      console.log(updatedProperty);
    } 
       
   res.send({updatedProperty:updatedProperty})

  });
  module.exports = router;