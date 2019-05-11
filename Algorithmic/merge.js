var u = require('./Utility');
var rl = require('readline-sync');

/*
 * @Aim: Merge Sort
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 27/02/2019
 */

var n = rl.question("Enter the numbers of elements:");
var str = [];
console.log("Enter elements to be sorted:");

for (let i = 0; i < n; i++) {
    str[i] = rl.question();
}
let mergeArr = u.sort(str,0, n-1);
console.log("Sorted Array:");
for (let i = 0; i < n; ++i) {
    console.log(mergeArr[i] + " ");

}
