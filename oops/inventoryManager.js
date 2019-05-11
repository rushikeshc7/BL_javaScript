var fs = require('fs');
var rl = require('readline-sync');
/** 
 * @Aim     : Inventory Management Program
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 07/03/2019
 */

class Inventory{
    constructor(){
        var content = fs.readFileSync('inventoryManager.json');
        this.data = JSON.parse(content);
    }
}
class InventoryManage extends Inventory{

    inventoryManagement() {

        var ch = Number(rl.question("press\n1. Add\n2. Delete\n3. Display\n4. Exit\n"));
        if (ch == 1) {
            this.add();
        }
        else if (ch == 2) {
            this.remove();
        }
        else if (ch == 3) {
            this.display();
        }
        else if (ch == 4) {
            this.exit();
        }
        else {
            console.log("Invalid key/input ");
        }
    }

    add() {

        var name = rl.question("Enter the name of the company:");
        var share = rl.question("Enter the number of shares:");
        var price = rl.question("Enter the price of your share:");
        this.data.stock.push({
            StockName: name,
            NoOfShare: share,
            SharePrice: price
        })
        fs.writeFileSync('inventoryManager.json', JSON.stringify(this.data));
        this.inventoryManagement();

    }

    remove() {

        var cmpName = rl.question("Enter the company name to delete:");
        for (let i = 0; i < this.data.stock.length; i++) {
            if (this.data.stock[i].StockName == cmpName) {
                var index = data.stock.indexOf(this.data.stock[i]);

                this.data.stock.splice(index, 1);
            }

        }
        fs.writeFileSync('inventoryManager.json', JSON.stringify(this.data));
        this.inventoryManagement();

    }

    display() {
        console.log(this.data);
        this.inventoryManagement();
    }

    exit() {
        console.log();
        return;
    }
}

var inv = new InventoryManage();
inv.inventoryManagement();

