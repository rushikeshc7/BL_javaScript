var u = require('./Utility');
var rl = require('readline-sync');

/*
 * @Aim: Windchill
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 25/02/2019
 */
try{
var t = (Number (process.argv[2]));
var v = (Number (process.argv[3]));

if(t == "" && v == "") throw "empty";
if(isNaN(t) && isNaN(v)) throw "Not a Number";
}
catch(err){
    ("temp and speed should be positive")
}
var windchill = u.windchillCalculate(t,v);
console.log(windchill);