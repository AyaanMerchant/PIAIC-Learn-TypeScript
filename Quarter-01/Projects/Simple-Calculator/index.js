#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(`\t\t<<<<======================================================>>>>`);
console.log(chalk.cyan.bold(`\t\t\tWelcome To CodeWithAyaan - Simple Calculator`));
console.log(`\t\t<<<<======================================================>>>>\n`);
const answer = await inquirer.prompt([
    { message: chalk.yellow.bold("Enter First Number:"), type: "number", name: "fistNumber" },
    { message: chalk.yellow.bold("Enter Second Number:"), type: "number", name: "secondNumber" },
    {
        message: chalk.green("Select Operator to Perform Action: "),
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
console.log(answer);
//conditional Statement
if (answer.Operator === "Addition") {
    console.log(`\nAnswer: ${answer.fistNumber} + ${answer.secondNumber} =`, answer.fistNumber + answer.secondNumber);
}
else if (answer.Operator === "Subtraction") {
    console.log(`\nAnswer: ${answer.fistNumber} - ${answer.secondNumber} =`, answer.fistNumber - answer.secondNumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(`\nAnswer: ${answer.fistNumber} x ${answer.secondNumber} =`, answer.fistNumber * answer.secondNumber);
}
else if (answer.Operator === "Division") {
    console.log(`\nAnswer: ${chalk.magenta.bold(answer.fistNumber)} / ${chalk.magenta.bold(answer.secondNumber)} =`, chalk.green.bold(answer.fistNumber / answer.secondNumber));
}
else {
    console.log("Invalid Operator");
}
