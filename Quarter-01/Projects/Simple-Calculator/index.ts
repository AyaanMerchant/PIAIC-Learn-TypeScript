#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "fistNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select Operator to Perform Action",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

console.log(answer);
//conditional Statement
if (answer.Operator === "Addition") {
  console.log(answer.fistNumber + answer.secondNumber);
} else if (answer.Operator === "Subtraction") {
  console.log(answer.fistNumber - answer.secondNumber);
} else if (answer.Operator === "Multiplication") {
  console.log(answer.fistNumber * answer.secondNumber);
} else if (answer.Operator === "Division") {
  console.log(answer.fistNumber / answer.secondNumber);
} else {
  console.log("Invalid Operator");
}