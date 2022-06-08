const mongoose = require("mongoose");


const BookSchema = new mongoose.Schema({
    name: String,
    author_id: {
        type: Number,
        require: true
    },
    price: Number,
    rating: Number
}, { timestamps: true })

module.exports = mongoose.model('bookWithAut', BookSchema);