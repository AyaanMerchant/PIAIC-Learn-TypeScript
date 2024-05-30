#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blackBright("=").repeat(63))
console.log(chalk.magenta.bold("\tWelcome to CodeWithAyaan - Number Guessing Game"))
console.log(chalk.blackBright("=").repeat(63))

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessNumber",
        type: "number",
        message: chalk.yellow.bold("Enter Your Guess Number (Limit from 1 - 10): "),
    }
]);

if(answer.UserGuessNumber === randomNumber){
    console.log(chalk.greenBright.bold("\n\tCongralutions! You Guess correct Number"))
}
else{
    console.log(chalk.redBright.bold("\n\tSorry! you Guess Wrong Number"))
    console.log(chalk.greenBright.bold("\tThe Actual Number is:",randomNumber))
}