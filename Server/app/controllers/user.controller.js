const User = require('../models/users');


module.exports = {
    //Create new User
    createUser: (req, res, next) => {
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            status: 1
        })
        User.addUser(newUser, (err, data) => {
            if (err) {
                return res.send({
                    success: false,
                    error: err,
                    message: 'Failed to register new user'
                });
            } else {
                return res.send({
                    success: true,
                    id: data.id,
                    message: 'New User registered successfully'
                });
            }
        })
    },

    //View Single User
    getUser: async (req, res, next) => {
        let id = req.params.id;
        await User.find({ "_id": id, "status": "1" }, (err, data) => {
            if (err || data.length == 0) {
                return res.send({
                    success: false,
                    message: "User Not founded..!",
                    error: err ? err : "No active users data in db"
                })
            }

            let result = {
                data: data,
                success: true
            }
            return res.send(result);
        })
    },
    // Get All Users
    listUser: async (req, res, next) => {
        
        await User.find({ "status": 1 }, (err, data) => {

            if (err || data.length == 0) {
                return res.send({
                    success: false,
                    message: "No Users founded..!",
                    error: err ? err : "No active users data in db"
                })
            }

            let result = {
                data: data,
                success: true
            }
            res.send(result);
        })
    }

}