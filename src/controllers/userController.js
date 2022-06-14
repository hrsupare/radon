const userModel = require("../models/userModel")


const createUser = async function (req, res) {
    let usersData = req.body
    let data1 = req.headers.isFreeAppUser
    let createData = await userModel.create(usersData)
    // console.log(data1)
    res.send({ msg: createData })
}

const getUser = async function (req, res) {
    let allUser = await userModel.find()
    res.send({ Msg:allUser })
}

module.exports.createUser = createUser

module.exports.getUser = getUser