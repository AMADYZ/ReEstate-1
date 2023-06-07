const Router=require('express');
const router=Router();
const session = require('express-session');
const fileUpload = require('express-fileupload');
const createProp = require('../controllers/addproperty.controller')
router.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
  }));
  router.use(fileUpload());

router.get('/', (req, res) => {
    res.render('addproperty')
})

router.post('/', createProp)

module.exports = router;