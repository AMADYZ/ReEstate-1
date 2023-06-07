const mongoose = require('mongoose');
const properties1 = require('../database/schemas/properties1')
const user = require('../database/schemas/user');

let pendProp = {}
let allpendProps = []


let getPendingproperty = async (req, res) => {
    pendProp = await properties1.find({Pending: 'waiting'})
    allpendProps = Array.from(pendProp)
    res.render('pendingproperty', {allProps: allpendProps})
}

let setPropertyPending = async (req, res) => {
  try {
    const { PropertyID, Pending } = req.body;
    console.log(PropertyID, Pending);
    const update = { $set: { Pending: Pending } };

    let prop = await properties1.findByIdAndUpdate(PropertyID, update);
    
    res.status(200).json({ success: true, message: 'Property pending status updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error updating property pending status' });
  }
};


module.exports = {getPendingproperty, setPropertyPending}