#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green.bold(`\n<<<====================================================================>>>`))
console.log(chalk.yellow.bold("<<<===== Welcome to CodeWithAyaan - Currency Converter Application =====>>>"))
console.log(chalk.green.bold(`<<<====================================================================>>>\n`))

let conversionRate: any = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280
}

let userAnswer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.magentaBright.bold("\nSelect The Currency To Covert From:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.magentaBright.bold("\nSelect The Currency To Covert TO:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    }, 
    {
        name: "amount",
        type: "input",
        message: chalk.magentaBright.bold("\nEnter The Amount To Convert:")

    }
])

let from_amount = conversionRate[userAnswer.from_currency]
let to_amount = conversionRate[userAnswer.to_currency]
let amount = userAnswer.amount

let baseAmount = amount/from_amount
let convertedAmount = baseAmount * to_amount

console.log(chalk.greenBright.bold(`\nCoverted Amount: ${convertedAmount} ${userAnswer.to_currency}`))