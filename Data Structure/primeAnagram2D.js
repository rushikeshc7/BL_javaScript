var u = require('../Algorithmic/Utility');

/** 
 * @Aim     : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. Store the
 *            prime numbers in a 2D Array,
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 04/03/2019
 */


var arrayPrime = u.primeNumber(1000);
var arrAP = [[]];
var range = 100, p = 0;
//	prints prime numbers that are anagrams
for (let i = 0; i < arrayPrime.length; i++) {
    for (let j = i + 1; j < arrayPrime.length; j++) {

        if (u.anagram(arrayPrime[i].toString(), arrayPrime[j].toString())) {
            if (arrayPrime[i] <= range) {
                if (arrayPrime[j] <= range) {
                    arrAP[p].push(arrayPrime[i]);
                    arrAP[p].push(arrayPrime[j]);
                }
            }
            else {
                p++;
                range = range + 100;
                arrAP[p] = [];
                if (arrayPrime[j] <= range) {
                    arrAP[p].push(arrayPrime[i]);
                    arrAP[p].push(arrayPrime[j]);
                }
            }
        }
    }
}
console.log("Anagram prime numbers are: ");
for (let i = 0; i < 10; i++) {

    console.log(arrAP[i]);
}

