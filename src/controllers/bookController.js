const bookModel = require("../models/bookModel")
const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
 
    res.send({ msg: savedData })
}

const bookList = async function (req, res) {
    let allBooks = await BookModel.find()
    res.send({ msg: allBooks })
}

const getBooksInYear = async function (req, res) {
   let getyYear = await bookModel.find({ "year": 2010 })
    res.send({ msg: getyYear })
}

const getParticularBooks = async function (req, res) {
     let fetch = await bookModel.find({ $or :[
        {bookName : "The Hunger Games"}, {year :2010 }
    ] })
    res.send({ msg: fetch })
}

const getXINRBooks = async function (req, res) {
    let priceBook = await bookModel.find({ $or: [{'prices.indianPrice': '500INR'}, {'prices.indianPrice': '200INR'},{'prices.indianPrice': '100INR'}]})
    res.send({ msg: priceBook })

}

const getRandomBooks = async function (req, res) {
    let randomBook = await bookModel.find({ stockAvailable: true, totalPages: { $gt: 500 } })
    res.send({ msg: randomBook })
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks