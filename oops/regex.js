var rl = require('readline-sync');
/** 
 * @Aim     : Regex expression demonstration
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 07/03/2019
 */


class Regex {
    constructor() {
        this.str = "Hello, <<name>>!!!";
        this.str1 = "Your full name: <<full name>>";
        this.str2 = "Your contact number: +91-<<xxxxxxxxxx>>";
        this.str3 = "Thank you bridgelabz <<xx/xx/xxxx>>";
    }
}
class RegexExp extends Regex {

    Regex() {

        var nameRegex = /\w/;
        var contactRegex = /\d/;
        var dateRegex = /\d-\d-\d\d\d\d/;

        var name = rl.question("Enter your name:");
        if (nameRegex.test(name)) {
            var s1 = this.str.replace("<<name>>", name);
            console.log(s1);
            console.log();
        } else {
            console.log("Enter valid name");
        }

        var fullName = rl.question("Enter your full name:");
        if (nameRegex.test(fullName)) {
            var s2 = this.str1.replace("<<full name>>", fullName);
            console.log(s2);
            console.log();
        }
        else {
            console.log("Enter valid full name");
        }

        var contactN = rl.question("Enter your contact number:");
        if (contactRegex.test(contactN) && contactN.length === 10) {
            var s3 = this.str2.replace("<<xxxxxxxxxx>>", contactN);
            console.log(s3);
            console.log();
        }
        else {
            console.log("Enter valid contact number");
        }

        var d = new Date();
        var date = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
        if (dateRegex.test(date)) {
            var s4 = this.str3.replace("<<xx/xx/xxxx>>", date);
            console.log(s4);
        }
        else {
            console.log("Date is not correct");
        }

    }


}

var reg = new RegexExp();
reg.Regex();


