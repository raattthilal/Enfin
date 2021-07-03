const Book = require('../models/books');
const jwt = require('jsonwebtoken');
const config = require('../../config/params.config');
const fs = require('fs');

module.exports = {
    //Create new Book
    createBook: (req, res, next) => {
        let bookData = fs.readFileSync('sample.json');  
        let books = JSON.parse(bookData);  
        
    
        Book.insertMany(books, (err, data) => {
            if (err) {
                return res.send({
                    success: false,
                    error: err,
                    message: 'Failed to adding new Books'
                });
            } else {
                console.log(data);
                return res.send({
                    success: true,
                    message: 'New Books added successfully'
                });
            }
        })
    },

    //View Single Book
    getBook: async (req, res, next) => {
        let id = req.query.id;
        await Book.findOne({ "_id": id}).exec((err, data) => {
            if (err || data.length == 0) {
                return res.send({
                    success: false,
                    message: "Book Not founded..!",
                    error: err ? err : "No Book data in db"
                })
            }
           
            let result = {
                data: data,
                success: true
            }
           
            return res.send(result);
        })
    },
    // Get All Book
    listBook: async (req, res, next) => {
        let findObj={}
        if(req.query.search){
            let keyword = req.query.search;
            findObj.$or= [ {title : { $regex: keyword}}, { shortDescription: { $regex: keyword } }, { longDescription: { $regex: keyword} },{ status: { $regex: keyword } } ]
        }
        console.log(findObj);
        const page = Number(req.query.page) || 0;
        const limit = Number(req.query.limit) || 5;
        var skipPage = page * limit;

        await Book.find(findObj).skip(skipPage).limit(limit).exec(async (err, data) => {

            if (err || data.length == 0) {
                return res.send({
                    success: false,
                    message: "No Book founded..!",
                    error: err ? err : "No Book data in db"
                })
            }
            
            const count = await Book.countDocuments(findObj); 
            let result = {
                data: { 
                        data:data,
                        count:count
                    },
                success: true
            }
            res.send(result);
        })
    },

}