const property = require('../database/schemas/property')
const allProp = []
async function getAvgPrice (){
    const props =await property.find({});
    allProp = Array.from(props);
    const totalPrice = allProp.reduce((sum , item) => sum + item.price, 0)
    console.log(totalPrice/allProp.length)
    return totalPrice/allProp.length
}
module.exports = getAvgPrice