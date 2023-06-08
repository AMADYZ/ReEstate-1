const Router=require('express');
const router=Router();
const properties1=require('../database/schemas/properties1');
const user1=require('../database/schemas/user');
const session = require('express-session');
require('../database/');
router.get('/', (req, res) => {
    res.render('compare')
})

router.post('/', async (req, res) => {
    let {property_1, property_2} = req.body
    let firstProperty = await properties1.findById({_id: property_1})
    let secProperty = await properties1.findById({_id: property_2})
    
    const data = {
        URI: '/compare',
        prop_1: firstProperty,
        prop_2: secProperty
    }

    res.json(data)
});

module.exports = router;