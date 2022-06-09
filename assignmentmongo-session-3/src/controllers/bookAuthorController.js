const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");

const crtAuthor = async function (req, res) {
    let data1 = req.body
    let sData = await authorModel.create(data1)
    res.send({ msg: sData })
}

const crtBook = async function (req, res) {
    let data = req.body
    let bkData = await bookModel.create(data)
    res.send({ msg: bkData })
}

const findBook = async function (req, res) {
    let data = await authorModel.find({ authorName: "chetan bhagat" }).select({ author_id: 1, _id: 0 })
    let fnd2 = await bookModel.find({ author_id: data[0].author_id })
    res.send({ msg: fnd2 })
}

const updatePrice = async function (req, res) {
    let findAuth = await bookModel.findOneAndUpdate({ name: "Two states" }, { $set: { price: 100 } }, { new: true })
    let sendBack = await authorModel.find({ author_id: findAuth.author_id })
    let prc = findAuth.price
    res.send({ msg: sendBack[0].authorName, prc })
}

const findByPrice = async function (req, res) {
    let findprc = await bookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1 })
    let arr=[]
    for (let i=0;i<findprc.length; i++){
        let authorName=await authorModel.find({author_id:findprc[i].author_id}).select({authorName:1,author_id:1,_id:0})
        arr.push(authorName)
    }
    res.send({ msg:arr})
        

}

module.exports.crtAuthor = crtAuthor
module.exports.crtBook = crtBook
module.exports.findBook = findBook
module.exports.updatePrice = updatePrice
module.exports.findByPrice = findByPrice