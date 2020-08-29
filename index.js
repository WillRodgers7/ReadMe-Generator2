// array of questions for user
const generateMarkdown = require("./utils/generateMarkdown");
const fs =  require("fs");
const path = require("path");
const inquirer = require('inquirer');
const questions = [




        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "describe",
            message: "Please describe your project in one sentence?"
        },
       
        {
            type: "input",
            name: "install",
            message: "What is needed for insalation?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is is your project used for?"
        },
        {
            type: "input",
            name: "licence",
            message: "What licences are needed to run your project?"
        },
        {
            type: "input",
            name: "contribute",
            message: "Who contributed to this project?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },



];


// function to write README file
function writeToFile(fileName, data) {

    return  fs.writeFileSync (path.join (process.cwd (), fileName), data);

}

// function to initialize program
function init()
{

    inquirer.prompt(questions)
    .then(inquirerResponses =>{
    console.log("inquirerResponses: ", inquirerResponses)
    writeToFile("README.md", generateMarkdown ({...inquirerResponses}));

    });
};

    


// function call to initialize program
init();