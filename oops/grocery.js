var rl = require('readline-sync');
var fs = require('fs');
/** 
 * @Aim     : Data management of rice, pulses and wheat
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 07/03/2019
 */

class Inventory {
    constructor() {
        //read from the file
        var data = fs.readFileSync('inventory.json');
        //json parsing
        this.json = JSON.parse(data);
    }
}
class Invent extends Inventory{

    groceryJson() {

        console.log("1. Rice\n2. Pulses\n3. Wheat");
        var ch = rl.question("Enter your choice:");
        switch (ch) {
            case "1":
                //data from json
                var wt = rl.question("Enter the weight of rice:");
                for (let i = 0; i <= this.json.Rice.length - 1; i++) {
                    console.log(this.json.Rice[i].name + "'s price per kg is:" + this.json.Rice[i].price + " for " + wt + " kg price is:" + wt * this.json.Rice[i].price);
                }
                break;
            case "2":
                //data from json
                var wt = rl.question("Enter the weight of rice:");
                for (let i = 0; i <= this.json.Pulses.length - 1; i++) {
                    console.log(this.json.Pulses[i].name + "'s price per kg is:" + this.json.Pulses[i].price + " for " + wt + " kg price is:" + wt * this.json.Pulses[i].price);
                }
                break;
            case "3":
                //data from json
                var wt = rl.question("Enter the weight of rice:");
                for (let i = 0; i <= this.json.Wheat.length - 1; i++) {
                    console.log(this.json.Wheat[i].name + "'s price per kg is:" + this.json.Wheat[i].price + " for " + wt + " kg price is:" + wt * this.json.Wheat[i].price);
                }
                break;
            default:
                console.log("Enter valid choice");

        }
    }
}

var inv = new Invent();
inv.groceryJson();

