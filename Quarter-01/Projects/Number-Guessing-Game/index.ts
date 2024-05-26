#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n\tWelcome to 'CodeWithAyaan' - CLI Number Guessing Game\n")

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessNumber",
        type: "number",
        message: "Enter Your Guess Number (Limit from 1 - 10): ",
    }
]);

if(answer.UserGuessNumber === randomNumber){
    console.log("\nCongralutions! You Guess correct Number")
}
else{
    console.log("\nSorry! you Guess Wrong Number")
    console.log("The Actual Number is:",randomNumber)
}