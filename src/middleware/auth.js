const jwt = require("jsonwebtoken")


let authentication = function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    // console.log(token);
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });
    next()
}

const authorise = function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    // console.log(token);
    let decodedToken = jwt.verify(token, 'functionup-radon')
    console.log(decodedToken)

    let userToBeModified = req.params.userId
    
    let userLoggedIn = decodedToken.userId

    if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

    // comapre the logged in user's id and the id in request
    next()
}


module.exports.authentication = authentication

module.exports.authorise = authorise