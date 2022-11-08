// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "Title",
        type: "Input",
        message: "What is your Application Title:"
    },
    {
        name: "Name",
        type: "Input",
        message: "Name:"
    },
    {
        name: "Email",
        type: "Input",
        message: "Email Address:"
    },
    {
        name: "Github",
        type: "Input",
        message: "Github Username:"
    },
    {
        name: "Description",
        input: "Input",
        message: "Describe the Application:"
    },
    {
        name: "Tech",
        type: "Checkbox",
        choices: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Node.js", "React.js"],
        message: "Which tech did you use to build this:"
    },
    {
        name: "Installation",
        input: "Input",
        message: "Describe the Installation Process:"
    },
    {
        name: "Usage",
        type: "Input",
        message: "What is the use case:"
    },
    {
        name: "Contributing",
        type: "Input",
        message: "Project Contribution Guidelines:"
    },
    {
        name: "Tests",
        type: "Input",
        message: "Testing Instructions:"
    },
    {
        name: "License",
        type: "Checkbox",
        message: "Which licese/license's will it use:",
        choices: ["MIT", "BSD", "Apache", "GPL", "ISC", "Public", "None"],
    }
];

const promptUser = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./example/readme.md', data, err => {
            if (err) {{
                reject(err);
                return;
            }
        resolve({
            ok:true,
            message: "readme.md has been created",
        })}
        })
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
