var u = require('./Utility');
var rl = require('readline-sync');

/*
 * @Aim: Insertion sort
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 27/02/2019
 */


var arr = [];
console.log("Enter words:");
var n = rl.question("Enter the no of words:");
for (let i = 0; i < n; i++) {
    arr[i] = rl.question();
}
u.insertion(arr, n);









