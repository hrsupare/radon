
const isFreeAppUsers = function (req, res, next) {
    const headears = req.headers
    let appType = headears["isFreeAppUser"]

    if (!appType) {
        appType = headears["isfreeappuser"]
    }
    if (!appType) {
        return res.send({ status: "false", massage: "headers is Missing" })
    }
    if (appType == 'true') {
        req.appTypeFree = true
    } else {
        req.appTypeFree = false
    }
    (next());
}

module.exports.isFreeAppUsers = isFreeAppUsers 