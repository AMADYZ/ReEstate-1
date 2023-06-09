const Router = require('express');
const router = Router();
const properties1 = require('../database/schemas/properties1');
const user1 = require('../database/schemas/user');
const session = require('express-session');
require('../database/');
router.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));
router.get('/', async (req, res) => {
  username = req.session.username
  let pro = await properties1.find().where('username').equals(username);
  let user12 = await user1.find().where('username').equals(username);
  let phone = user12[0].phone;
  res.render('myproducts', { pro, phone });
})

router.post('/', async (req, res) => {
  try {
    await properties1.findOneAndDelete({ _id: req.body.id });
  }
  catch (err) {
    console.error(err);
  }

})

module.exports = router;