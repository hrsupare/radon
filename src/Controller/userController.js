const UserModel = require("../Models/userModel.js")

const createBookdata = async function (req, res) {
    let data = req.body
    let SavedData = await UserModel.create(data)
    res.send({ msg: SavedData })

}

const getBookData = async function (req, res) {
    let allData = await UserModel.find()
    res.send({ msg: allData })
}

module.exports.createBookdata = createBookdata

module.exports.getBookData = getBookData
