var list = require('./linkedList');
var rl = require('readline-sync');
var fs = require('fs');
/** 
 * @Aim     : Hash Function
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 05/03/2019
 */


//Read text from file
var data = fs.readFileSync('hashFunction.txt');

//Convert data to string and split
strData = data.toString();
var numArray = strData.split(" ");
var arr = [];

//loop to iterate through the data
for (let i = 0; i < numArray.length; i++) {

    //Take remainder using mod
    var k = numArray[i] % 11;
    if (arr[k] == undefined) {

        //Add element in the linked list
        arr[k] = new list.linkedList();
        arr[k].add(numArray[i]);
    }
    else {
        arr[k].add(numArray[i]);
    }
}

//Print slot 0 to 10
for (let j = 0; j <= 10; j++) {
    console.log("\nNumber at " + j + " ");
    if (arr[j] != undefined) {
        arr[j].show();
    }
}

//Enter value to search
var num = parseInt(rl.question("\nEnter Number you want to search:\n"));

//Take remainder using Mod by 11
var input = num % 11;

if (arr[input] != undefined) {

    //Search element in the list
    if (arr[input].search(num) != -1) {

        //if present, remove value
        arr[input].remove(num);
        console.log("Number removed");

    }
    else {

        //if absent, add value
        arr[input].add(num)
        console.log("Number added")
    }
}
else {
    //if undefined then add linked list and values in the list
    arr[input] = new list.linkedList();
    arr[input].add(num);
    console.log("Number added");
}
for (let j = 0; j <= 10; j++) {

    //Print slot from 0 to 10
    console.log("\nNumber at " + j + " ");
    if (arr[j] != undefined) {
        arr[j].show();
    }
 
    
}
