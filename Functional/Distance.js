var u = require('./Utility');
var rl = require('readline-sync');

/*
 * @Aim: Calculate the distance from point(x,y) to origin(0,0) 
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 25/02/2019
 */

var x = process.argv[2];
var y = process.argv[3];
var result = u.distance(x, y);
console.log("The distance of " + x + " and " + y + " from origin is " + result);
   