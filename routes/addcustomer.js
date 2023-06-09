const Router=require('express');
const router=Router();
const createUser = require('../controllers/add.customer')


router.get('/', (req, res) => {
    res.render('customers')
})

router.post('/', createUser)

module.exports = router;