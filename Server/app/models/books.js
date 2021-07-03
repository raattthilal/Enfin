const mongoose = require('mongoose');

function transform(doc, ret) {
    var id = doc._id;
    delete ret._id;
    ret.id = id;
}
var params = {
    toObject: {
        transform: transform
    },
    toJSON: {
        transform: transform
    }
};
// BookSchema Schema
const BookSchema = mongoose.Schema({
    __id:Number,
    title: String,
    isbn : String,
    pageCount : Number,
    publishedDate :{
        $date : String
    },
    thumbnailUrl : String,
    shortDescription : String,
    longDescription : String,
    status : String,
    authors:[],
    categories: []

}, params);


const Books = module.exports = mongoose.model('Books', BookSchema);



