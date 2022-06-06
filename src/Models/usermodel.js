const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: String,
    authorName: String,
    category: String,
    year: Number,
}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema)

const sports = new mongoose.Schema({
    Sport: {
        type: String,
        require: true,
    },
    total_Player: {
        type: Number,
        required: true
    },
    start_From: {
        type: Number,
        required: true
    }

} ,{ timestamps: true })

module.exports=mongoose.model("Sport",sports)