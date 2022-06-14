
const isFreeAppUsers = function (req, res, next) {
    const data = req.headers.isfreeappuser
    // console.log(data)
    if (data === undefined) {
        res.send({ msg: "isFreeAppUser is not defined " })
    }
    else if(next());
}

module.exports.isFreeAppUsers=isFreeAppUsers 