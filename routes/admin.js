const Router=require('express');
const router=Router();
const getStats=require("../controllers/dashboard.stats")

router.get('/', getStats)

module.exports = router;
