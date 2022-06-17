const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
    //You can name the req, res objects anything.
    //but the first parameter is always the request 
    //the second parameter is always the response
    try {
        let data = req.body;
        console.log(data)
        if (Object.keys(data).length != 0) {
            let savedData = await userModel.create(data);
            console.log(req.newAtribute);
            res.status(201).send({ msg: savedData });
        }
        else {
            res.status(400).send({ msg: false, massage: "require information not fill " })
        }
    }
    catch (error) {
        console.log("This is the Error", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }


};

const loginUser = async function (req, res) {
    try {
        let userName = req.body.emailId;
        let password = req.body.password;
        let user = await userModel.findOne({ emailId: userName, password: password });
        if (!user)
            return res.status(401).send({
                status: false,
                msg: "username or the password is not corerct",
            });
        let token = jwt.sign(
            {
                userId: user._id.toString(),
                batch: "radon",
                organisation: "FunctionUp",
            },
            "functionup-radon"
        );
        res.setHeader("x-auth-token", token);
        res.status(401).send({ status: true, token: token });
    } catch (error) {
        console.log("This is the Error", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }
};




// const loginUser = async function (req, res) {
//     try {
//         let credential = req.body
//         console.log(Object.keys(credential))
//         let userName = req.body.emailId;
//         let password = req.body.password;
//         if (!user){
//             return res.send({
//                 status: false,
//                 msg: "username or the password is not corerct",
//             });
//         }
//         // if (!credential) {
//         //     res.send({ status: false, msg: "credential not found" })
//         // }
//          if (Object.keys(credential).length != 0) {
//             let user = await userModel.findOne({ emailId: userName, password: password });
//             let token = jwt.sign(
//                 {
//                     userId: user._id.toString(),
//                     batch: "radon",
//                     organisation: "FunctionUp",
//                 },
//                 "functionup-radon"
//             );
//             res.setHeader("x-auth-token", token);
//             res.send({ status: true, token: token });
//         }

//     }

//     catch (error) {
//         console.log("This is the Error", error.massage)
//         res.status(500).send({ status: false, error: error.massage })
//     }
//     // Once the login is successful, create the jwt token with sign function
//     // Sign function has 2 inputs:
//     // Input 1 is the payload or the object containing data to be set in token
//     // The decision about what data to put in token depends on the business requirement
//     // Input 2 is the secret
//     // The same secret will be used to decode tokens


//     // creating a Token



// };



const getUserData = async function (req, res) {
    //   console.log(token);
    // If a token is present then decode the token with verify function
    // verify takes two inputs:
    // Input 1 is the token to be decoded
    // Input 2 is the same secret with which the token was generated
    // Check the value of the decoded token yourself
    try {
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if (!userDetails)
            return res.status(400).send({ status: false, msg: "No such user exists" });
        res.status(201).send({ status: true, data: userDetails });
    }
    catch (error) {
        console.log("This is the Error", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }
};



const updateUser = async function (req, res) {
    // Do the same steps here:
    // Check if the token is present
    // Check if the token present is a valid token
    // Return a different error message in both these cases
    try {
        let userId = req.params.userId;
        let user = await userModel.findById(userId);
        //Return an error if no user with the given id exists in the db
        if (!user) {
            console.log("This is the Error", error.message)
            return res.status(401).send("No such user exists");
        }

        let userData = req.body;
        // console.log(userData);
        // let oldData = await userModel.findOne({ _id: userId }, userData)
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
        res.status(201).send({ updatedData: updatedUser });
    }
    catch (error) {
        console.log("This is the Error", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }
};

let deleteUser = async function (req, res) {
    try {
        let userId = req.params.userId;
        let user = await userModel.findById(userId);
        if (!user) {
            return res.status(401).send("No such user exists");
        }
        let deleteUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
        res.status(201).send({ updatedData: deleteUser });
    } catch (error) {
        console.log("This is the Error", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }
}

const postMessage = async function (req, res) {
    try {
        let message = req.body.message
        // console.log(message)
        let userId = await userModel.findById(req.params.userId)
        if (!userId) return res.status(401).send({ status: false, msg: 'No such user exists' })
        // It will give old post 
        // let updatedPosts = userId.posts
        //it will only give new posts
        let updatedPosts = user.posts
        // console.log(updatedPosts)
        //add the message to user's posts
        updatedPosts.push(message)
        // console.log(updatedPosts)
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { posts: updatedPosts }, { new: true })
        //return the updated user document
        return res.status(201).send({ status: true, data: updatedUser })
    } catch (error) {
        console.log("This is the Error", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }
}

    module.exports.createUser = createUser;
    module.exports.getUserData = getUserData;
    module.exports.updateUser = updateUser;
    module.exports.loginUser = loginUser;
    module.exports.deleteUser = deleteUser;
    module.exports.postMessage = postMessage;
