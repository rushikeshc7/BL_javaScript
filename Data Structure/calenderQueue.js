var u = require('../Algorithmic/Utility');
var dst = require('./dataStructure');
var w = require('util');

/** 
 * @Aim     : Display calender in queue implemented using linked list
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 05/03/2019
 */


var month = +process.argv[2];
var year = +process.argv[3];
var dayOfWeek = u.dayOfWeek(month, 1, year); 
var dayOfWeek = u.dayOfWeek(month, 1, year);

//Months array
var months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "Septeber", "October", "November", "December"];

//Weekdays array
var weekDays = ["", "S", "M", "T", "W", "Th", "F", "S"];

//Number of days in respective months
var days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//If leap year then february holds 29 days
if ((month == 2) && (u.checkLeapYear(year))) {
    days[month] = 29;
}
var dayQueue = new dst.queue();
var dateQueue = new dst.queue();
w.print(months[month] + "  " + year);
console.log();

//Enqueue weekDays in the queue
for (let i = 1; i < weekDays.length; i++) {
      dayQueue.enqueue(weekDays[i]);
}
console.log();

//Enqueue number of days in the month to the queue
for (var i = 1; i <= days[month]; i++) {
    dateQueue.enqueue(i);
   }

//dequeue weekDays from the queue and print
for (let i = 1; i < weekDays.length; i++) {
    w.print(dayQueue.dequeue() + "  ");
}

console.log();
for (var i = 0; i < dayOfWeek; i++) {
    w.print("   ");
}

//Iterate through days
for (let i = 1; i <= days[month]; i++) {
    if (i < 10){
    w.print("0" + dateQueue.dequeue() + " ");
    }
    else{
    w.print(i + " ");
    }
    //date mod 7 is 0 then it shifts to next line
    if ((i + dayOfWeek) % 7 == 0)
    console.log();
}

