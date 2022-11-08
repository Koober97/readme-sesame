// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is your Application Title:"
    },
    {
        name: "name",
        type: "input",
        message: "What is your Name?:"
    },
    {
        name: "email",
        type: "input",
        message: "What is your Email Address:"
    },
    {
        name: "github",
        type: "input",
        message: "What is your Github Username:"
    },
    {
        name: "description",
        input: "input",
        message: "Describe the Application:"
    },
    {
        name: "tech",
        type: "checkbox",
        choices: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Node.js", "React.js"],
        message: "Which tech did you use to build this:"
    },
    {
        name: "installation",
        input: "input",
        message: "Describe the Installation Process:"
    },
    {
        name: "usage",
        type: "input",
        message: "What is the use for this:"
    },
    {
        name: "contributing",
        type: "input",
        message: "Project Contribution Guidelines:"
    },
    {
        name: "tests",
        type: "input",
        message: "Testing Instructions:"
    },
    {
        name: "license",
        type: "checkbox",
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
          message: 'readme.md created',
        })
      }})
  })
  }

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(questions => {
            return generateReadMe(questions);
        })
        .then(formattedPage => {
            return writeToFile(formattedPage);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);
        })
}

// Function call to initialize app
init();
