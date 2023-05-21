const property = require('../database/schemas/property')
const {client} = require('../database/index')
function getAvgPrices(){
    const db = client.db('RealEstate')
    const collection = db.collection('properties')
    const propertyArr = collection.find({}).toArray((err, docs)=>{
        if(err){
            console.log('Error occured while retrieving data')
            process.exit(0)
        }
    })
    const totalPrice = propertyArr.reduce((sum,property)=> {
        sum + property.price,0
    })
    const avgPrice = totalPrice/propertyArr.length
    return avgPrice
}

module.exports = getAvgPrices