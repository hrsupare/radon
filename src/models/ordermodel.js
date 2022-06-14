const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId: {
        type: objectId,
        ref: "userDoc"
    },
    productId: {
        type: objectId,
        ref: "allProduct"
    },
    amount: Number,
    date :{
        type:String,
        default :"13/06/2021"

    }
}, { timestamps: true });

module.exports = mongoose.model('allOrder', orderSchema)