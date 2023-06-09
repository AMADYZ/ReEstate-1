const mongoose = require('mongoose');
const User = require('../database/schemas/user');

let createUser = async (req, res) => {
    const { username_inp, email_inp, phone_inp, pass_inp, admin_check } = req.body;
    let error = {};

    // Validate username
    const foundUsername = await User.findOne({ username: username_inp }).exec();
    const foundEmail = await User.findOne({ email: email_inp }).exec();
    if (foundUsername && foundEmail) {
        error = {
            errorName: 'Both already exist',
            errortype: 'Both',
        };
        return res.send(error);
    } else if (foundEmail) {
        error = {
            errorName: 'Email already exists',
            errortype: 'Email',
        };
        return res.send(error);
    } else if (foundUsername) {
        error = {
            errorName: 'Username already exists',
            errortype: 'Username',
        };
        return res.send(error);
    }

    if (Object.keys(error).length > 0) {
        return;
    }
    
    try {
        let newUser;
        if (admin_check) {
            newUser = await User.create({
                username: username_inp,
                email: email_inp,
                phone: phone_inp,
                pass: pass_inp,
                Role: 'Admin',
                Pending: 'true'
            })             
        } else {
            newUser = await User.create({
                username: username_inp,
                email: email_inp,
                phone: phone_inp,
                pass: pass_inp,
                Role: 'User',
                Pending: 'true'
            });
        }
        return res.send({statusType:'success', redirectUrl: '/users'});
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).send('Error creating user');
    }
};

module.exports = createUser;


