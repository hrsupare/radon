const userModel = require("../Models/userModel.js")

const createBookdata = async function (req, res) {
    let data = req.body
    let SavedData = await UserModel.create(data)
    res.send({ msg: SavedData })

}

const getBookData = async function (req, res) {
    let allData = await userModel.find()
    res.send({ msg: allData })
}

const createSport = async function (req, res) {
    let details = req.body
    let alldeatils = await userModel.create(details)
    res.send({ msg: alldeatils })
}

const getSportDetails = async function (req, res) {
    let allSportData = await userModel.find()
        res.send({ msg: allSportData })
    
}


module.exports.createBookdata = createBookdata

module.exports.getBookData = getBookData

module.exports.createSport = createSport

module.exports.getSportDetails = getSportDetails