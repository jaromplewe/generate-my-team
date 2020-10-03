const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./lib/Employee");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
console.log(outputPath)

const render = require("./lib/htmlRenderer");
console.log('hello');

let employeeArr = [];
let finalHtml;

let runPrompts = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Employee Name:"
            },
            {
                type: "list",
                name: "role",
                message: "What is your role?",
                choices: [
                    "Manager",                 
                    "Engineer",
                    "Intern",
                ]
            },
            {
                type: "input",
                name: "id",
                message: "Employee ID"
            },
            {
                type: "input",
                name: "email",
                message: "Employee Email:"
            },
            {
                type: "input",
                name: "github",
                message: "Employee Github:",
                when: (response) => response.role === "Engineer"
            },
            {
                type: "input",
                name: "school",
                message: "Employee School:",
                when: (response) => response.role === "Intern"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Office Number:",
                when: (response) => response.role === "Manager"
            },
            {
                type: "list",
                name: "yesNo",
                message: "Add another team member?",
                choices: [
                    "Yes",
                    "No"
                ]
            }
        ])
        .then(response => {
            let employee;
            if (response.role === "Manager") {
                employee = new Manager(response.name, response.role, response.id, response.email, response.officeNumber);
            } else if (response.role === "Engineer") {
                employee = new Engineer(response.name, response.role, response.id, response.email, response.github);
            } else if (response.role === "Intern") {
                employee = new Intern(response.name, response.role, response.id, response.email, response.school);
            }

            employeeArr.push(employee);

            if (response.yesNo === "Yes") {
                runPrompts();
            } else if (response.yesNo === "No") {
                finalHtml = render(employeeArr);
                writeHTML(finalHtml);
            }
        })
        .catch(err => {
            if (err) {
                console.log(err);
            }
        });
}
runPrompts();

function writeHTML(finalHtml) {
    fs.writeFile(outputPath, finalHtml, (err) => {
        if (err) throw err;
        console.log('Successfully written!');
    });
};