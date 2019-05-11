var u = require('./Utility');
var rl = require('readline');

/*
 * @Aim: Harmonic Number
 * @auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 25/02/2019
 */

 var userInput = rl.createInterface({
     input: process.stdin,
     output: process.stdout,

 })

 userInput.question("Enter the number:", (n)=>{
     var result = u.harmonicNumber(n);
     console.log(n +"th Harmonic number is: " + result);
     
     process.exit();
 })