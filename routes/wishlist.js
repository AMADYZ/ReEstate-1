const Router=require('express');
const router=Router();
const session = require('express-session');
const user = require('../database/schemas/user');
const properties1 = require('../database/schemas/properties1')
router.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
  }));

  router.get('/', async (req, res) => {
    try {
      const username = req.session.username;
      const foundUser = await user.findOne({ username: username });
      const arrWish = foundUser.wishlist;
      const arrofProp = [];
      
      if (arrWish.length === 0) {
        res.render('wishlist', { wishlist: arrofProp, isFound: false });
      } else if (arrWish.length === 1) {
        const property = await properties1.findById(arrWish[0]);
        arrofProp.push(property);
        res.render('wishlist', { wishlist: arrofProp, isFound: true });
      } else {
        for (const item of arrWish) {
          const property = await properties1.findById(item);
          arrofProp.push(property);
        }
        res.render('wishlist', { wishlist: arrofProp, isFound: true });
      }
    } catch (error) {
      console.error(error);
      res.render('error', { error: 'An error occurred' });
    }
  });
  

  router.put('/', async (req, res) => {
    try {
      const { propertyWish, userName } = req.body;
      const foundUser = await user.findOne({ username: userName });
      const foundWishlist = foundUser.wishlist;
  
      // Check if the property ID already exists in the wishlist
      if (foundWishlist.includes(propertyWish)) {
        res.send({message:"its already added"});
        return;
      }
  
      foundWishlist.push(propertyWish);
  
      const update = { $set: { wishlist: foundWishlist } };
  
      await user.updateOne({ username: userName }, update);
      res.send('Property Added!');
    } catch (error) {
      console.error('Error updating user attribute:', error);
      res.status(500).send('Error updating user attribute');
    }
  });
  router.delete('/', async (req, res) => {
    try {
      const {id,username} = req.body;
      const foundUser = await user.findOne({ username: username });
      const foundWishlist = foundUser.wishlist;
  
      const propertyIndex = foundWishlist.indexOf(id);
      if (propertyIndex === -1) {
        return res.status(400).send('Property does not exist in the wishlist');
      }
      console.log(foundWishlist);

      foundWishlist.splice(propertyIndex, 1);
      console.log(foundWishlist);
  
      const update = { $set: { wishlist: foundWishlist } };
  
      await user.updateOne({ username: username }, update);
      res.send('Property Removed!');
    } catch (error) {
      console.error('Error updating user attribute:', error);
      res.status(500).send('Error updating user attribute');
    }
  });

  
  module.exports = router;