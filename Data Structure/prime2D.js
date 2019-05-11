var u = require('../Algorithmic/Utility');
var w = require('util');
/** 
 * @Aim     : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. Store the
 *            prime numbers in a 2D Array,
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 04/03/2019
 */

var prime =  u.primeNumber(1000);
// console.log("Prime numbers are: " + primeNumbers);
var arrPrime = [["000-100 "],["100-200 "],["200-300 "],["300-400 "],["400-500 "],["500-600 "],["600-700 "],["700-800 "],["800-900 "],["900-1000 "]];
var range = 100, i = 0, j = 1;
for(let p = 0;p < prime.length-1; p++){
    if (prime[p] < range){
    arrPrime[i][j] = prime[p];
    j++;
    }
    else{
        j = 1;
        i++;
        range = range + 100;
        arrPrime[i][j] = prime[p];
    }
}

for(let k = 0;k<10;k++){
    for(let l = 0;l<arrPrime[k].length;l++){
    w.print(arrPrime[k][l] + " " );
    }
    console.log();
}
