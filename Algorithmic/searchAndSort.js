var u = require('./Utility');
var rl = require('readline-sync');
/*
 * @Aim: ­ Output the Search and Sorted List.
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 27/02/2019
 */


console.log("1. binarySearch method for integer");
console.log("2. binarySearch method for String");
console.log("3. insertionSort method for integer");
console.log("4. insertionSort method for String");
console.log("5. bubbleSort method for integer");
console.log("6. bubbleSort method for String");
var choice = 0;
do {
    console.log();
    choice = rl.question("Enter your choice:");
    switch (choice) {
        case "1":
            var n = rl.question("Enter no of elements of array:");
            
            var arr = [];
            console.log("Enter elements in int array:");

            for (let i = 0; i < n; i++) {
                arr[i] = rl.question();
            }
            var start = u.currentTime();
            var key = rl.question("Enter element you want to search:");
            u.bubbleSortInt(arr, n);
            
            if (u.binSearchInt(arr, key) > -1) {
                console.log("Number found");
            }
            else
               console.log("Not found");
            var end = u.currentTime();
            var result = u.elapsedTime(start, end);
            console.log("\nTime taken for binary search: " + (result / 1000) + " second.");
            break;

        case "2":
            var n = rl.question("Enter no of elements of array:");
            
            var array = [];
            console.log("Enter elements in string array");

            for (let j = 0; j < n; j++) {
                array[j] = rl.question();
            }
            start = u.currentTime();
            var keyStr = rl.question("Enter String you want to search:");
            u.bubbleSortStr(array, n);
            if (u.binSearchStr(array, keyStr) > -1) {
                console.log("String found");
            }
            else
                console.log("String Not found");
            end = u.currentTime();
            result = u.elapsedTime(start, end);
            console.log("\nTime taken for binary search: " + (result / 1000) + " second.");

            break;

        case "3":
            var nI = rl.question("Enter no of elements of array:");
            start = u.currentTime();
            var arrInt = [];
            console.log("Enter elements in int array:");

            for (let k = 0; k < nI; k++) {
                arrInt[k] = rl.question();
            }
            u.insertionSortInt(arrInt, nI);
            end = u.currentTime();
            result = u.elapsedTime(start, end);
            console.log("\nTime taken for insertion sort: " + (result / 1000) + " second.");
            break;

        case "4":
            var nS = rl.question("Enter no of elements of array:");
            start = u.currentTime();
            var arrStr = [];
            console.log("Enter elements in string array:");

            for (let p = 0; p < nS; p++) {
                arrStr[p] = rl.question();
            }
            u.insertion(arrStr, nS);
            end = u.currentTime();
            result = u.elapsedTime(start, end);
            console.log("\nTime taken for insertion sort: " + (result / 1000) + " second.");

            break;

        case "5":
            var nI1 = rl.question("Enter no of elements of array:");
            start = u.currentTime();
            var arrInt1 = [];
            console.log("Enter elements in int array:");
            
            for (let q = 0; q < nI1; q++) {
                arrInt1[q] = rl.question();
            }
            
            
            u.bubbleSortInt(arrInt1, nI1);
            end = u.currentTime();
            result = u.elapsedTime(start, end);
            console.log("\nTime taken for bubble sort: " + (result / 1000) + " second.");
            break;

        case "6":
            var nS1 = rl.question("Enter no of elements of array:");
            start = u.currentTime();
            var arrStr1 = [];
            console.log("Enter elements in string array:");
            
            for (let r = 0; r < nS1; r++) {
                arrStr1[r] = rl.question();
            }
            
            u.bubbleSortStr(arrStr1, nS1);
            end = u.currentTime();
            result = u.elapsedTime(start, end);
            console.log("\nTime taken for bubble sort: " + (result / 1000) + " second.");
            break;

        default:
            choice = rl.question("Wrong choice. Please select between 1 to 6:");

    }
} while (choice != 0);