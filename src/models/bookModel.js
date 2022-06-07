const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        require: true
    },
    authorName: String,
    tags: [String],
    isPublished: Boolean,
    year: {
        type: Number,
        default: 2021
    },
    totalPages: Number,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: { type: Number, default: 10 },
    stockAvailable: Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
