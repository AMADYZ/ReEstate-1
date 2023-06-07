const user = require('../database/schemas/user');
const bcrypt = require('bcrypt');
const moment = require('moment')

let users = {}
let allUsers = []

const currentTime = moment();
let getUsers = async (req, res) => {
    users = await user.find({})
    allUsers = Array.from(users)
    allUsers.forEach((user) => {
        const accountCreationTime = moment(user.createdAt);
        const duration = moment.duration(currentTime.diff(accountCreationTime));
        const timeElapsed = duration.humanize();
        user.timeNow = timeElapsed
    })
    res.render('users', { allUsers: allUsers })
}

module.exports = getUsers