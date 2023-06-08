const Router=require('express');
const router=Router();
const mongoose=require('mongoose');
const bodyparser=require('body-parser'); 
require('../database/');
const user = require('../database/schemas/user');
const property = require('../database/schemas/properties1')

let users = {}
let props = {}
let recentProps = []
let getStats = async (req , res) => {
    users = await user.find({})
    props = await property.find({})
    const recents = await property.find()
    .sort({createdAt: -1})
    .limit(5)
    recentProps = Array.from(recents)
    allProp=Array.from(props);
    allUsers = Array.from(users)
    const totalPrice = allProp.reduce((sum, property) => sum + property.price, 0);
    const locationCounts = allProp.reduce((countMap, obj) => {
        const location = obj.location;
        countMap[location] = (countMap[location] || 0) + 1;
        return countMap;
    }, {});
    const sortedLocations = Object.keys(locationCounts).sort((a, b) => locationCounts[b] - locationCounts[a]);
    const top3Locations = sortedLocations.slice(0, 3);
    const top3Objects = allProp.filter(obj => top3Locations.includes(obj.location)).slice(0 , 3).map(obj => obj.location)
    
    
    const data = {
        avgPrice: `${Math.ceil(totalPrice/allProp.length)} EGP`,
        noOfUsers: users.length,
        top3Objects: top3Objects,
        percentp: 75,
        percentu: 45,
        recentProps: recentProps
    }
    res.render('dashboard',{data});
}

module.exports = getStats;
