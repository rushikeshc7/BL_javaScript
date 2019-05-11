var u = require('./Utility');
var rl = require('readline-sync');
/*
 * @Aim:  Take a date as input and prints the day of the week that date falls on
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 27/02/2019
 */
try{
 var m = +process.argv[2];
 var d = +process.argv[3];
 var y = +process.argv[4];
 if(m == "") throw "empty";
 if(d == "") throw "empty";
 if(y == "") throw "empty";
 var days = u.dayOfWeek(m,d,y);
 console.log(days);
}
catch(err){
    console.log("Error");
}