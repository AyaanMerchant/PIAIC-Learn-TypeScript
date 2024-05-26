#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 5000;
let myPin = 1234;
console.log("\n\tWelcome to 'CodeWithAyaan' - ATM Machine\n");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "\nEnter Your Pin Code:",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("\nPin is Correct, Login Successfully!");
    console.log(`Your Current Balance is ${balance}`);
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "\nSelect the Operation",
            choices: ["Withdraw Amount", "Check Balance"],
        },
    ]);
    if (operationAnswer.operation === "Withdraw Amount") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter Amount to Withdraw:",
            },
        ]);
        if (amountAnswer.amount > balance) {
            console.log("\nInsufficient Balance");
        }
        else {
            balance -= amountAnswer.amount;
            console.log(`\n${amountAnswer.amount} WithDraw Sucessfully!`);
            console.log(`Your Remainning Balance is ${balance}`);
            console.log("Thank You For Transaction");
        }
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log(`\nYour Acount Balance is ${balance}`);
    }
}
else {
    console.log("\nYou Have Enter Wrong Pin! Try Again");
}
