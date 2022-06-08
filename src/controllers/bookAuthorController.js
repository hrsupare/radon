const bookAuthorModel = require("../models/bookAuthorModel")
const authorModel = require("../models/authorModel")

const crtAuthor = async function (req,res){
    let data1 = req.body 
    let sData = await bookAuthorModel.create(data1)
    res.send ({msg : sData})
}

const crtBook = async function (req,res){
    let data = req.body 
    let bkData = await authorModel.create(data)
    res.send ({msg : bkData})
}

module.exports.crtAuthor=crtAuthor
module.exports.crtBook=crtBook