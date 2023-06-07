const Router=require('express');
const router=Router();
const properties1=require('../database/schemas/properties1');
const user = require('../database/schemas/user');
const session = require('express-session');
require('../database/');
router.get('/', async (req, res) => {
    let info=req.session.personal;
    const search =await properties1.find().where("username").equals(info);
    const user1= await user.find().where("username").equals(info);
    res.render('listing',{user1,search})
})
module.exports = router;