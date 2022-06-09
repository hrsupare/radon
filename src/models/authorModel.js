const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    author_id: {
        type: Number,
        require: true
    },
    authorName : String,
    age: Number,
    address: String
}, { timestamps: true });




module.exports = mongoose.model('author', AuthorSchema);


