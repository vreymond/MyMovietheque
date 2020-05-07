const mongoose = require('mongoose');


const User = require('../models/user');

/* TODO:
        - user signup
        - user signin
        - user delete
*/

exports.user_signup = (req, res, next) => {
    console.log('User signup!');
};

exports.user_signin = (req, res, next) => {
    console.log('User signin!');
};

exports.user_remove = (req, res, next) => {
    console.log('User removed!');
};
