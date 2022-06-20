const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: String,
    Balance: {
        type: Number,
        default: 100
    },
    Address: String,
    age: Number,
    Gender: {
        type: String,
        enum: ["male", "female", "others"]
    },
    isFreeAppUser: {
        type: Boolean,
        default: false

    }
}, { timestamps: true });

module.exports = mongoose.model('userDoc', userSchema) 