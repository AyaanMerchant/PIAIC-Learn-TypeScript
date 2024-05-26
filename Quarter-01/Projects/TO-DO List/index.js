#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
console.log(chalk.magenta.bold("\n \t Welcome to CodeWithAyaan - Todo List Application\n"));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.bold.yellow("Enter Your Task:"),
        }
    ]);
    todoList.push(addTask.task);
    console.log(chalk.bold.italic.blueBright(`\n \t${addTask.task} Task Added Todo List\n`));
    let addMoretask = await inquirer.prompt([
        {
            name: "moreTask",
            type: "confirm",
            message: chalk.italic.italic.cyan("Do You Want to Add More Task?"),
            default: false,
        }
    ]);
    condition = addMoretask.moreTask;
}
console.log("\n \tYour Updated Todo-List:", todoList);
