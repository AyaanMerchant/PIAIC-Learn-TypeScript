#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let balance = 5000;
let myPin = 1234;
console.log(chalk.blackBright("=").repeat(55));
console.log(chalk.magenta.bold("\tWelcome to CodeWithAyaan - ATM Machine"));
console.log(chalk.blackBright("=").repeat(55));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: (chalk.yellowBright.bold("Enter Your Security Code:")),
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green.bold("\n\tPin is Correct, Login Successfully!"));
    console.log(chalk.italic.bold.blueBright(`\nYour Current Balance is ${balance} Rupees\n`));
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: chalk.yellowBright.bold("Select the Operation"),
            choices: ["Withdraw Amount", "Check Balance"],
        },
    ]);
    if (operationAnswer.operation === "Withdraw Amount") {
        let WithDrawOption = await inquirer.prompt([
            {
                name: "Option",
                type: "list",
                message: chalk.yellowBright.bold("Select a WithDrawal Method:"),
                choices: ["Fast Cash", "Enter Amount"],
            },
        ]);
        if (WithDrawOption.Option === "Enter Amount") {
            let amountAnswer = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: chalk.yellowBright.bold("Enter Amount to Withdraw:"),
                },
            ]);
            if (amountAnswer.amount > balance) {
                console.log(chalk.redBright.bold("\nInsufficient Balance"));
            }
            else {
                balance -= amountAnswer.amount;
                console.log(chalk.bold.green(`\n${amountAnswer.amount} Rupees WithDraw Sucessfully!`));
                console.log(chalk.bold.blueBright(`Your Remainning Balance is ${balance}`));
                console.log(chalk.bold.bold.italic.green("\n \tThank You For Transaction"));
            }
        }
        else if (WithDrawOption.Option === "Fast Cash") {
            let fastCashOption = await inquirer.prompt([
                {
                    name: "cashOption",
                    type: "list",
                    message: chalk.yellowBright.bold("Select Amount:"),
                    choices: [1000, 2000, 5000, 10000],
                },
            ]);
            if (fastCashOption.cashOption > balance) {
                console.log(chalk.redBright.bold("\nInsufficient Balance!"));
            }
            else {
                balance -= fastCashOption.cashOption;
                console.log(chalk.bold.green(`\n${fastCashOption.cashOption} Rupees WithDraw Sucessfully!`));
                console.log(chalk.bold.blueBright(`Your Remainning Balance is ${balance}`));
                console.log(chalk.bold.bold.italic.green("\n \tThank You For Transaction"));
            }
        }
        else {
            console.log(chalk.redBright.bold("Invalid Option!"));
        }
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log(chalk.greenBright.bold(`\nYour Acount Balance is "${chalk.yellow.bold(balance)}"`));
        console.log(chalk.bold.italic.blueBright("\n \tThank You For Using ATM Machine"));
    }
}
else {
    console.log(chalk.redBright.bold("\nYou Have Enter Wrong Pin! Try Again"));
}
