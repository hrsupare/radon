const printDate = function () {
    let dat = new Date()
    console.log(dat);
}

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const printMonth = function () {
    const d = new Date();
    let name = month[d.getMonth()];
    console.log(name);
}


const getBatchInfo = function () {
    console.log('Radon ,W3D3,the topic for today is what is NodeJs,How NodeJs work, Nodejs module system');
}
module.exports.printDate = printDate
 module.exports.printMonth = printMonth
module.exports.getBatchInfo =  getBatchInfo
