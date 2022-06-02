const { request } = require('express');
const express = require('express');
const externalModule = require('../logger/logger.js')
const dmb = require('../util/helper.js')
const formatt = require('../validator/Formatter.js')
const _ = require('lodash')
const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.welcome()
    res.send('My first ever api!')
});
router.get('/test-me1', function (req, res) {
    dmb.printDate()
    dmb.printMonth()
    dmb.getBatchInfo()
    res.send('Current Date')
});

router.get('/test-me2', function (req, res) {
    formatt.trimm()
    formatt.changetoLowerCase()
    formatt.changetoUpperCase()
    res.send('Formatter')
});

router.get('/hello', function (req, res) {
    let arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    console.log(_.chunk(arr, 4))

    let oddarr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    console.log(_.tail(oddarr))

    array1 = [24, 25, 26, 27, 28, 29]
    array2 = [21, 22, 23, 24, 25, 26]
    array3 = [18, 19, 20, 21, 22, 23]
    array4 = [15, 16, 17, 18, 19, 20]
    array5 = [12, 13, 14, 15, 16, 17]
    console.log(_.union(array1, array2, array3, array4, array5))

    let list = [["horror","The Shining"],["drama","Titanic"], ["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
   console.log(_.fromPairs(list));

    res.send("4 equal size sub arrays")
});
module.exports = router;
// adding this comment for no reason