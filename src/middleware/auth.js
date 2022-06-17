const jwt = require("jsonwebtoken")


let authentication = function (req, res, next) {
    try {
        let token = req.headers["x-Auth-token"];
        // console.log(token); 
        if (!token) token = req.headers["x-auth-token"];
        if (!token) return res.status(403).send({ status: false, msg: "token must be present" });

        let decodedToken = jwt.verify(token, "functionup-radon");
        if (!decodedToken)
            return res.status(403).send({ status: false, msg: "token is invalid" });

        req["decodedToken"] = decodedToken

        next()
    } catch (error) {
        console.log("This is the Error", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }

}

const authorise = function (req, res, next) {
    // let token = req.headers["x-Auth-token"];
    // if (!token) token = req.headers["x-auth-token"];
    // // console.log(token);
    // let decodedToken = jwt.verify(token, 'functionup-radon')
    // console.log(decodedToken)

    try {
        let decodedToken = req.decodedToken

        let userToBeModified = req.params.userId

        let userLoggedIn = decodedToken.userId

        if (userToBeModified != userLoggedIn) return res.status(401).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

        // comapre the logged in user's id and the id in request
        next()
    }
    catch (error) {
        console.log("This is the Error", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }
}


module.exports.authentication = authentication

module.exports.authorise = authorise