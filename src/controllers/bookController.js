const authorModel = require("../models/authorModel")

const bookModel = require("../models/bookModel")

const publisherModel = require("../models/publisherModel")

const createAuthor = async function (req, res) {
    let author = req.body
    let authorCreated = await authorModel.create(author)
    res.send({ data: authorCreated })
}


const createPublisher = async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({ data: publisherCreated })
}


const createBook = async function (req, res) {
    let book = req.body
    if (book.author_id === undefined) {
        return res.send({ msg: "author id not present" })
    } else if (book.publisher === undefined) {
        return res.send({ msg: "publisher not present" })
    }
    else if (book.author_id !== "62a23a9ded557d10de555c69") {
        return res.send({ msg: "author id not valid" })
    }
    else if (book.publisher !== "62a23947ed557d10de555c5f") {
        return res.send({ msg: " not valid" })

    } else {
        let allbook = await bookModel.create(book)
        res.send({ msg: allbook })


    }
}



// const createBook = async function (req, res) {
//     let book = req.body
//     let allbook = await bookModel.create(book)
//     res.send({ msg: allbook })
// }



const finalBooksData = async function (req, res) {
    let allBookData = await bookModel.find().populate("publisher").populate("author_id")
    res.send({ msg: allBookData })
}




const updateBookData = async function (req, res) {
    let check1 = await publisherModel.find({ name: "HarperCollins" }).select('_id')
    let specificBook = await bookModel.updateMany({ publisher: check1 }, { $set: { isHardCover: true } })

    let check2 = await publisherModel.find({ name: "Penguin" }).select('_id')
    let specificBook2 = await bookModel.updateMany({ publisher: check2 }, { $set: { isHardCover: true } })
    res.send({ msg: specificBook, specificBook2 })

    // let check3 = await authorModel.find({ rating: { $gt: 3.5 } }).select({ authorName: 1 })
    // .update({price:500},{$set:{price:400}})
    // let incprc= await bookModel.updateMany({},{ $set: { price: + 10} }
    res.send({ msg: check1,check2})
}









// const updateBookData = async function (req, res) {
//     //let kd = publisher_id.name
//     let check1 = await publisherModel.find({name: "Penguin", name: "HarperCollins" }).select('_id')
//     let specificBook = await bookModel.updateMany({ publisher_id: check1 }, { $set: { isHardCover: true } })
//     res.send({ data: specificBook })
// }
// const updatefinalBookData = async function (req, res) {
//     //let kd = publisher_id.name

//     res.send({ data: specificBook })


// }


module.exports.createAuthor = createAuthor

module.exports.createPublisher = createPublisher

module.exports.createBook = createBook

module.exports.finalBooksData = finalBooksData

module.exports.updateBookData = updateBookData


