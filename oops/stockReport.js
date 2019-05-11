var fs = require('fs');
var rl = require('readline-sync');
/** 
 * @Aim     : Stock report
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 08/03/2019
 */


class Stock{
    constructor(){
        var data = fs.readFileSync('stock.json');
        this.json = JSON.parse(data);
    }
}
class StockReport extends Stock{

    stockJson() {

        console.log("1. INFY\n2. TATA\n3. RBI");
        var ch = rl.question("Enter your choice:");
        switch (ch) {
            case "1":
                var shares = rl.question("Enter of no of shares you want to purchase or buy:");
                // total = json.Stock[0] + json.Stock[1] + 
                console.log(this.json.Stock[0].stockName + "'s per stock price is:" + this.json.Stock[0].price + " for " + shares + " total price is:" + shares * this.json.Stock[0].price);
                break;
            case "2":

                var shares = rl.question("Enter of no of shares you want to purchase or buy:");
                console.log(this.json.Stock[1].stockName + "'s per stock price is:" + this.json.Stock[1].price + " for " + shares + " total price is:" + shares * this.json.Stock[1].price);
                break;
            case "3":

                var shares = rl.question("Enter of no of shares you want to purchase or buy:");
                console.log(this.json.Stock[2].stockName + "'s per stock price is:" + this.json.Stock[2].price + " for " + shares + " total price is:" + shares * this.json.Stock[2].price);
                break;
            default:
                console.log("Enter valid choice");
        }
    }
}
var stkReport = new StockReport();
stkReport.stockJson();

