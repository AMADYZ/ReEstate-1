const Router=require('express');
const router=Router();

router.get('/',(req,res)=>
{
    res.render('design')
})

module.exports = router;
