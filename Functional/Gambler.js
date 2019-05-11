var u = require('./Utility');
var rl = require('readline-sync');

/*
 * @Aim: Print Number of Wins and Percentage of Win and Loss.
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 25/02/2019
 */ 

stake = rl.question("Enter the stake value:");
goal = rl.question("Enter the goal value:");
noOfTimes = rl.question("Enter the noOfTimes value:");
u.gambler(stake, goal, noOfTimes);

