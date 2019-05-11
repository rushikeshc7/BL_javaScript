var u = require('./Utility');
var rl = require('readline');

/*
 * @Aim: Leap year
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 25/02/2019
 */

var userInput = rl.createInterface({
    input:process.stdin, 
    output: process.stdout
})

userInput.question("Enter the year:", (year)=>{
    u.leapYear(year);
    process.exit();
});