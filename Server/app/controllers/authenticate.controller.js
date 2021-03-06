const User = require('../models/users');
const jwt = require('jsonwebtoken');
const config = require('../../config/params.config');

module.exports = {
    //User Authentication
    authenticate: (req, res, next) => {
        const username = req.body.username;
        const password = req.body.password;

        if(!username || !password){
            if(!username){
                res.send({
                    success: false,
                    message: 'Username is Empty..!'
                })
            }
            if(!password){
                res.send({
                    success: false,
                    message: 'Password is Empty..!'
                })
            }
            if(!username && !password){
                res.send({
                    success: false,
                    message: 'Username and password is Required..!'
                })
            }
        }
        //Getting user details
        User.getUserByUsername(username, (err, userData) => {
            if (err) throw err;
            if (!userData) {
                return res.send({
                    success: false,
                    message: 'User not existed'
                })
            }
            //Cross checking password
            User.comparePassword(password, userData.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                //Creating jwt token
                    const token = jwt.sign(userData.toJSON(), config.development.jwt.secret, {
                        expiresIn: '24h' //24 hours
                    });
                   return res.send({
                        success: true,
                        token: token,
                        user: userData,
                        expiresIn: '24 Hours'
                    });
                } else {
                    return res.send({
                        success: false,
                        message: 'Wrong Password'
                    });
                }
            })
        })
    }
}