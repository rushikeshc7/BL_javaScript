var u = require('./Utility');
var fs = require('fs');
var rl = require('readline-sync');
var dst = require('../Data Structure/dataStructure');

/** 
 * @Aim     : Maintain the List of CompanyShares in a Linked List So new CompanyShares can 
 *            be added or removed easily
 * @Auther  : Rushikesh Chopade
 * @verison : 1.0.0
 * @since   : 13/03/2019
 */

class Stock {
    constructor() {
        var company = fs.readFileSync('companyShare.json', 'utf8');
        this.comp = JSON.parse(company);
        var customer = fs.readFileSync('customerShare.json');
        this.cust = JSON.parse(customer);
        this.lldst = new dst.linkList();
    }
}
class StockLinkedList extends Stock{

stockAdd(){
    do {
        console.log("1. Add company\n2. Remove company\n3. Print list\n4. Write to file\n");
        var ch = rl.question("Enter your choice:");
        switch (ch) {
            case "1":
                this.addCompany();
                break;
            case "2":
                this.removeCompany();
                break;
            case "3":
                this.printList();
                break;
            case "4":
                this.writeToFile();
                break;
            default:
                console.log("Enter valid choice");
        }
    } while (ch <= 4);

}


    addList() {
        for (let key in this.comp.company) {
            this.lldst.addData(this.comp.company[key]);
        }
        this.stockAdd();
    }
    addCompany() {
        var NameOfCompany = rl.question("Enter the name of company:");
        var symbol = rl.question("Enter the symbol of company:");
        var NoOfShare = rl.question("Enter the number of share:");
        var Price = rl.question("Enter the price of company:");
        let newCompany = {
            "NameOfCompany": NameOfCompany,
            "symbol": symbol,
            "NoOfShare": NoOfShare,
            "Price": Price
        }
        this.lldst.addData(newCompany);
    }

    removeCompany() {
        let current = this.lldst.head;
        var NameOfCompany = rl.question("Enter name of the company to remove:");
        while (current.value.NameOfCompany != NameOfCompany && current != null) {
            current = current.next;
        }
        if (current != null) {
            this.lldst.removeElement(current.value);
            console.log("Company removed");
        }
        else {
            console.log("Company not found");
        }
    }

    printList() {
        var current = this.lldst.head;
        while (current !== null) {
            console.log("Name Of the company:" + current.value.NameOfCompany);
            console.log("Symbol of the company:" + current.value.symbol);
            console.log("Number of share:" + current.value.NoOfShare);
            console.log("Price:" + current.value.Price);
            current = current.next;
        }
    }

    writeToFile() {
        this.comp.company = [];
        let current = this.lldst.head;
        while (current != null) {
            this.comp.company.push(current.value)
            current = current.next;
        }
        fs.writeFileSync('companyShare.json', JSON.stringify(this.comp));
    }
}

var stockO = new StockLinkedList();
stockO.addList();
