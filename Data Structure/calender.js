var u = require('./Utility');
var w = require('util');

/** 
 * @Aim     : Take a date as input and prints the day of the week that date falls on
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 01/03/2019
 */

//Command line arguments
var month = +process.argv[2];
var year = +process.argv[3];
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

w.print(months[month] + "  " + year);
console.log();

//print weekdays
for (let i = 1; i < weekDays.length; i++) {
    w.print(weekDays[i] + "  ");
    // process.stdout.write(`${weekDays[i]}`)
}
console.log();
for (let i = 0; i < dayOfWeek; i++) {
    w.print("   ");
}

for (let i = 1; i <= days[month]; i++) {
    if (i < 10)
    w.print("0" + i + " ");
    else
    w.print(i + " ");
    //date mod 7 is 0 then it shifts to next line
    if ((i + dayOfWeek) % 7 == 0)
    console.log();
}
