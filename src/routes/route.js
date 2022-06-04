const express = require('express');
// const myHelper = require('../util/helper')
// const underscore = require('underscore')

const router = express.Router();


let players =
    [
        {
            "name": "Dhiraj",
            "dob": "29/08/2000",
            "gender": "male",
            "city": "Akola",
            "sports": [
                "dais"
            ]
        },
        {
            "name": "Swapnil",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]
router.post('/players', function (req, res) {
    let newAar = req.body
    let nM = newAar.name
    let isRep = false

    for (let i = 0; i < players.length; i++) {
        if (players[i].name == nM) {
            isRep == true;
            break;
        }
    }
    if (isRep) {
        res.send("This Player Is already is in List")
    }
    else {
        players.push(newAar)

    }


    res.send({ data: players, status: true })
})

module.exports = router;
// adding this comment for no reason