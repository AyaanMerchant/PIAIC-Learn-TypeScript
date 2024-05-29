// Importing the 'inquirer' module for creating interactive command-line prompts
import inquirer from "inquirer";

// Importing the 'chalk' module to style the output in the terminal
import chalk from "chalk";

// Using 'chalk' to print a welcome message in bold yellow with some formatting
console.log(chalk.yellow.bold(`\n\t\tWelcome To CodeWithAyaan - Word Counter`));

// Printing a line of "=" characters to create a separator
console.log("=".repeat(70));

// Using 'inquirer' to prompt the user for input, specifically asking for a sentence
let answer = await inquirer.prompt([
    {
        // The name of the prompt result
        name: "senetence",
        // The type of prompt (input field)
        type: "input",
        // The message to display for the prompt, styled in bold green
        message: chalk.greenBright.bold("Enter A Sentence:")
    }
]);

// Splitting the input sentence into words by trimming any extra spaces and splitting by spaces
let words = answer.senetence.trim().split(" ");

// Printing another line of "=" characters as a separator
console.log("=".repeat(70));

// Printing the words of the sentence, styled with 'chalk'. The words are displayed in red and the label in magenta
console.log(chalk.magenta.bold(`- Senetnce Words: [${chalk.red.bold(words)}]`));

// Printing the count of words in the sentence, styled with 'chalk'. The count is displayed in red and the label in magenta
console.log(chalk.magenta.bold(`- Words Count: ${chalk.red.bold(words.length)}`));
