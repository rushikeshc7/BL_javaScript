var u = require('./Utility');
var rl = require('readline-sync');

/*
 * @Aim: print the elapsed time using stopwatch
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 25/02/2019
 */


var start, end;
var s = rl.question("Enter 1 to start:");
start = u.currentTime();

var e = rl.question("Enter 2 to end:");
end = u.currentTime();
result = u.elapsedTime(start, end);
console.log("Elapsed time in milliseconds is: " + result);
console.log("Elapsed time in seconds is: " +  result / 1000);