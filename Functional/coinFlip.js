var u = require('./Utility');
var rl = require('readline');

/*
 * @Aim: Flip Coin and print percentage of Heads and Tails
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 25/02/2019
 */

var userInput = rl.createInterface({
    input:process.stdin, 
    output: process.stdout
})

userInput.question("Enter the number of times coin flipped:", (n)=>{
    u.coinFlip(n);
    process.exit();
});
