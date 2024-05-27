#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import Choice from "inquirer/lib/objects/choice.js";



let todoList: string[] = [];
let condition = true;
console.log(chalk.green.bold(`\n<<<============================================================>>>`))
console.log(chalk.magenta.bold("<<<===== Welcome to CodeWithAyaan - Todo List Application =====>>>"))
console.log(chalk.green.bold(`<<<============================================================>>>\n`))

let mainTask = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.yellowBright.bold("Select an Option You Want to Do:"),
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"]
            }
        ])

        if (option.choice === "Add Task") {
            await addTask()
        }
        else if (option.choice === "Delete Task") {
            await deleteTask()
        }
        else if (option.choice === "Update Task") {
            await updateTask()
        }
        else if (option.choice === "View Todo-List") {
            await viewTask()
        }
        else if (option.choice === "Exit") {
            condition = false;
            console.log(chalk.red.bold("\n\tThank You For Using Todo List!"))
        }
    }
}

let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green("Enter Your Task:")
        }
    ])

    todoList.push(newTask.task)
    console.log(chalk.blue.italic(`\n"${chalk.green.bold (newTask.task)}" Task Added Successfully in Todo List\n`))
}

let viewTask = async () => {
    console.log(chalk.yellow.bold("\nYour Todo List:"))
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${chalk.greenBright.italic(task)}`)
    })
    console.log("\n")
}

let deleteTask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.green.bold("Enter The 'Index Number' Of The Task You Want To Delete:")
        }
    ])

    let deletedTask = todoList.splice(taskIndex.index - 1, 1)
    console.log(chalk.redBright.bold(`\n "${deletedTask}" This Task Has been Deleted Successfully From Your Todo List\n`))
}

let updateTask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.green("Enter The 'Index Number' Of The Task You Want To Update:")
        },
        {
            name: "new_task",
            type: "input",
            message: chalk.green("Now Enter New Task:")
        }
    ])

    todoList[taskIndex.index - 1] = taskIndex.new_task
    console.log(chalk.greenBright.bold(`\n Task At Index no. ${taskIndex.index} Updated Successfully [for Updated List Check Option: 'View Todo-List']\n`))
}

mainTask();