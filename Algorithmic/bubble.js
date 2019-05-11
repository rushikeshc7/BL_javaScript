var u = require('./Utility');
var rl = require('readline-sync');

/*
 * @Aim: Insertion sort
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 27/02/2019
 */


var n = rl.question("Enter number of elements in the array:");

var arr = [];
console.log("Enter array elements:");
for(let i=0;i<n;i++)
{
    arr[i]=rl.question();
}
u.bubble(arr, n);