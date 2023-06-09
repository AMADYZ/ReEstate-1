const mongoose = require('mongoose');
const user = require('../database/schemas/user');

let pendAdmins = {}
let allpendAdmins = []

let getPendAdmins = async (req, res) => {
    pendAdmins = await user.find({Pending: 'waiting'})
    allpendAdmins = Array.from(pendAdmins)
    res.render('pendadmins', {pendAdmins: allpendAdmins})
}


module.exports = getPendAdmins