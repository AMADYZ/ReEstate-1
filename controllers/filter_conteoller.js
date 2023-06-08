const Router = require('express');
const router = Router();
const properties1 = require('../database/schemas/properties1');
const user1 = require('../database/schemas/user');
const session = require('express-session');
require('../database/');


let filter1= async (req,res)=>
{
    const bathrooms = req.query.bathroom;
    const bedrooms = req.query.bedroom;
    const title = req.query.title;
    const maxPrice = parseInt(req.query['Max-Price']);
    const minPrice = parseInt(req.query['Min-Price']);
    const minArea = parseInt(req.query['Min-Area']);
    const maxArea = parseInt(req.query['Max-Area']);
    const condition = req.query['condition'];
    const type = req.query['property'];
    const filter = {};
    if (title) {
      const regex = new RegExp(title, 'i');
      filter.title = regex;
    }
    if (bathrooms) {
      filter.bathrooms = bathrooms;
    }
    if (bedrooms) {
      filter.bedrooms = bedrooms;
    }
    if (minArea && !isNaN(minArea) && maxArea && !isNaN(maxArea)) {
      filter.area = { $gte: minArea, $lte: maxArea };
    } else if (minArea && !isNaN(minArea)) {
      filter.area = { $gte: minArea };
    } else if (maxArea && !isNaN(maxArea)) {
      filter.area = { $lte: maxArea };
    }
    
    if (minPrice && !isNaN(minPrice) && maxPrice && !isNaN(maxPrice)) {
      filter.price = { $gte: minPrice, $lte: maxPrice };
    } else if (minPrice && !isNaN(minPrice)) {
      filter.price = { $gte: minPrice };
    } else if (maxPrice && !isNaN(maxPrice)) {
      filter.price = { $lte: maxPrice };
    }
    if (condition) {
      filter.condition = condition;
    }
    if (type) {
      filter.type = type;
    }
    const filteredData = await properties1.find(filter).where('Pending').equals("true");
    var array = Object.keys(filteredData)
      .map(function (key) {
        return filteredData[key];
      });
    const itemsPerPage = 6;
    const currentPage = parseInt(req.query.page) || 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedItems = array.slice(startIndex, endIndex);
    const totalPages = Math.ceil(array.length / itemsPerPage);
    let user12 = [];
    for (let i = 0; i < slicedItems.length; i++) {
      user12.push(await user1.find().where("username").equals(slicedItems[i].username));
    }
    res.render('filter', {
      title,
      data: slicedItems,
      currentPage,
      totalPages,
      user12,
    });

}

module.exports=filter1;