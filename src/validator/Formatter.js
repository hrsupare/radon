const trimm = function () {
    let test = "      Function up     ";
    console.log(test.trim());
}

const changetoLowerCase = function () {
    let test = "FUNCTIONUP";
    console.log(test.toLowerCase());
}


const changetoUpperCase = function () {
    let test = "FunctionUp";
    console.log(test.toUpperCase());
}

module.exports.trimm = trimm
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changetoUpperCase =changetoUpperCase
