const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
var ip = require('ip');
const { default: mongoose } = require('mongoose');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use(
    function (req, res, next) {
        var date = new Date();
        var ipadd = ip.address()
        console.log(date + " , " + ipadd + " , " + req.path);
        next();
    }
);

// https://drive.google.com/drive/folders/110brdO61EkyO3Ozau3fF_-cyk2qCTqkc?usp=sharing

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
