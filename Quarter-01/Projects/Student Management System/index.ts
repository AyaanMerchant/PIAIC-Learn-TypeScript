#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

class Student {
    static counter = 10000;
    id: number;
    name: string;
    courses: string[];
    balance: number;

    constructor(name: string) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = [];
        this.balance = 100;
    }

    enroll(course: string) {
        this.courses.push(course)
    }

    view_balance() {
        console.log(`Balance for ${this.name} : $${this.balance}`)
    }

    pay_fees(amount: number) {
        this.balance -= amount;
        console.log(`$${amount} Fees Paid Successfuly for ${this.name}`)
    }

    show_status(id: number) {
        console.log(`ID: ${this.id}`)
        console.log(`Name: ${this.name}`)
        console.log(`Courses: ${this.courses}`)
        console.log(`Balance: ${this.balance}`)
    }


}

class StudentManager {
    students: Student[]

    constructor() {
        this.students = []
    }

    //method to add new student
    add_student(name: string) {
        let student = new Student(name)
        this.students.push(student)
        console.log(`Student: ${name} Added Successfuly. Student ID: ${student.id}`)
    }
    //Method to enroll the student in the course
    async enroll_student() {
        let enroll_input = await inquirer.prompt([
            {
                name: "student_id",
                type: "number",
                message: "Enter The Student ID:"
            }
        ]);
        let student_found = this.find_student(enroll_input.student_id);
        if (student_found) {
            let course_input = await inquirer.prompt([
                {
                    name: "course_name",
                    type: "input",
                    message: "Enter A Course Name:"
                }
            ]);
            student_found.enroll(course_input.course_name);
            console.log(`${student_found.name} Enrolled in ${course_input.course_name} Successfully`);
        } else {
            console.log(chalk.red.bold(`Student Not Found, Please Enter The Correct Student ID`))
        }
    }

    // Method to view student Balance
    view_student_balance(std_id: number) {
        let student_found = this.find_student(std_id)
        if (student_found) {
            student_found.view_balance()
        }
        else {
            console.log(chalk.red.bold(`Student Not Found, Please Enter The Correct Student ID`))
        }
    }

    //Method to pay student fees
    async pay_student_fees() {
        let student_id_input = await inquirer.prompt([
            {
                name: "student_id",
                type: "number",
                message: "Enter The Student ID:"
            }
        ]);
        let student_found = this.find_student(student_id_input.student_id);
        if (student_found) {
            let amount_input = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter The Amount"
                }
            ]);
            student_found.pay_fees(amount_input.amount);
        } else {
            console.log(chalk.red.bold(`Student Not Found, Please Enter The Correct Student ID`))
        }
    }

    // Method to Display the Student Information
    show_student_status(std_id: number) {
        let student_found = this.find_student(std_id)
        if (student_found) {
            student_found.show_status(std_id)
        }
        else {
            console.log(chalk.red.bold(`Student Not Found, Please Enter The Correct Student ID`))
        }
    }


    // method to find the student using the student ID
    find_student(std_id: number) {
        return this.students.find(student => student.id === std_id)
    }


}


// Main Function to Run the Progress
async function main() {
    console.log(`\n\tWelcome To CodeWithAyaan - Student Management System`)
    console.log("-".repeat(67))

    let student = new StudentManager();

    //while loop to keep program running
    while (true) {
        let user_choice = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select An Option: ",
                choices: ["Add Student", "Enroll Student", "View Student Balance", "Pay Fees", "Show Status", "Exit"]
            }
        ]);

        // using switch Case
        switch (user_choice.choice) {
            case "Add Student":
                let name = await inquirer.prompt([
                    {
                        name: "addName",
                        type: "input",
                        message: "Enter The Student Name:"
                    }
                ]);
                student.add_student(name.addName)
                break;

            case "Enroll Student":
                await student.enroll_student();
                break;

            case "View Student Balance":
                let student_ID_input = await inquirer.prompt([
                    {
                        name: "Student_ID",
                        type: "number",
                        message: "Enter The Student ID:"
                    }
                ]);
                student.view_student_balance(student_ID_input.Student_ID)
                break;

            case "Pay Fees":
                await student.pay_student_fees();
                break;

            case "Show Status":
                let student_input2 = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter The Student ID:"
                    }
                ]);
                student.show_student_status(student_input2.student_id)
                break;

            case "Exit":
                console.log(`Thank You For Using Student Management System`)
                process.exit()
        }

    }
}

main();
