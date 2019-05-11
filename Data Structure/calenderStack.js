var u = require('../Algorithmic/Utility');
var stk = require('./stack');
var w = require('util');

/** 
 * @Aim     : Display calender in stack implemented using linked list
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 05/03/2019
 */

//Command line arguments
var month = +process.argv[2];
var year = +process.argv[3];
var dayOfWeek = u.dayOfWeek(month, 1, year); 

//Months array
var months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "Septeber", "October", "November", "December"];

//weekdays array
var weekDays = ["","S", "M", "T", "W", "Th", "F", "S"];

//Number of days in respective months
var days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//if leap year then february holds 29 days
if ((month == 2) && (u.checkLeapYear(year))) {
    days[month] = 29;
}

//Stacks
var dayStack = new stk.Stack();
var dateStack = new stk.Stack();

w.print(months[month] + "  " + year);
console.log();

//Push weekDays in the stack
for (let i = weekDays.length - 1;i >= 1; i--) {
      dayStack.push(weekDays[i]);
}
console.log();
//Pop weekDays from the stack
while(!dayStack.isEmpty()){
    w.print(dayStack.pop() + "  ");
}

//push days in the stack
for (let j = days[month]; j >= 1; j--) {
    dateStack.push(j);
   }


console.log();
for (let i = 0; i < dayOfWeek; i++) {
    w.print("   ");
}
for (let i = 1;i <= days[month]; i++) {

    //pop dates from the stack
    if (i < 10){
    w.print("0" + dateStack.pop() + " ");
    }
    else{
    w.print(i + " ");
    }
    //date mod 7 is 0 then it shifts to next line 
    if ((i + dayOfWeek) % 7 == 0)
    console.log();
}

