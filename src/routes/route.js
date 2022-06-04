const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha', 'Akash', 'Pritesh'])
    console.log('The first element received from underscope function is ' + firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {

    res.send('Hello there!')
});

router.get('/candidates', function (req, res) {
    console.log('Query paramters for this request are ' + JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is ' + state)
    console.log('Gender is ' + gender)
    console.log('District is ' + district)
    let candidates = ['Akash', 'Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function (req, res) {
    console.log('The request objects is ' + JSON.stringify(req.params))
    console.log('Candidates name is ' + req.params.canidatesName)
    res.send('Done')
})

router.get('/movies', function (req, res) {
    let listm = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log(listm);
    res.send(" problem 1")
})

// router.get('/movies/:indexNumber', function (req, res) {
//     let listmn = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
//     let num = (req.params)
//     let number = listmn[num.indexNumber]
//     console.log(number)
//     res.send("problem 2")
// })

router.get('/movies/:indexNumber', function (req, res) {
    let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let lengthOfMovies = movies.length
    let num = ((req.params))
    let Number = movies[num.indexNumber]

    if ((lengthOfMovies - 1) >= num.indexNumber) {
        console.log(Number);
    }
    else {
        console.log("iuse a valid index");
    }
    res.send('ohhhh')
})


router.get('/films', function (req, res) {
    let moviearr = [{
        "id": 1,
        "name": "The Shining"
    },
    {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]
    console.log(moviearr)
    res.send("problem 4")
})


router.get('/filmss/:filmid', function (req, res) {

    let moviearr = [{
        "id": 1,
        "name": "The Shining"
    },
    {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]
    let length1 = (moviearr.length);
    let num = (req.params);
    let number = moviearr[num.filmid]
    if ((length1 - 1) >= num.filmid) {
        console.log(number);
    }
    else {
        console.log('No movie exists with this id');
    }

    res.send("problem 5")
})


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
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]
router.post('/players', function (req, res) {
    let newaar = req.body.newplay
    let nm = req.body.newplay.name
    for (let i = 0; i <= players.length; i++) {
        if (players.name !== nm) {
            players.push(newaar)
            
        }
        else {
            console.log("This Name in Already Exists");
        }
    }
    res.send({ data: players, status: true })
})

module.exports = router;
// adding this comment for no reason