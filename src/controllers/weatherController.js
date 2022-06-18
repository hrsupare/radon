let axios = require("axios")

let tempall = []

let getWeather = async function (req, res) {
    try {
        let q = req.query.q
        let appid = req.query.appid
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios(options);
        // console.log(result) 
        let data = result.data.main.temp
        tempall.push({ city: q, temp: data })


        let sorttemp = tempall.sort(function (a, b) { return a.temp - b.temp });

        res.status(200).send({ msg: sorttemp, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getWeather = getWeather