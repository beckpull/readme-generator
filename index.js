// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        validate: function(response) {
            if (response.length < 1) {
                return console.log('Please enter a valid project name.')
            } 
            return true;
        }
    },
    {
        type: 'input',
        message: "Next, we need a description - what should we put there?",
        name: 'description',
        validate: function(response) {
            if (response.length < 1) {
                return console.log('Please enter a description for your project.')
            } return true;
        }
    },
    {
        type: 'input',
        message: "How would a user go to install your application? Make sure to include any details one would need/want to know.",
        name: 'install',
    },
    {
        type: 'input',
        message: "Are there any specific usage instructions to go over?",
        name: 'usage',
        validate: function(response) {
            if (response.length < 1) {
                return console.log('Please enter some usage directions for your future users.')
            } return true;
        }
    },
    {
        type: 'input',
        message: "What are your guidlines for users who want to contribute to your project?",
        name: 'contributions',
        validate: function(response) {
            if (response.length < 1) {
                return console.log('Please validate whether this project is open for collaboration, and if so, your guidelines for contribution.')
            } return true;
        }
    },
    {
        type: 'input',
        message: "Do you have any tests written for your application? If so, include them here (with any instructions needed on how users can run them)",
        name: 'test'
    },
    {   type: 'list',
        message: "Which license did you use for your project?",
        choices: ['GPL-2.0', 'GPL-3.0-only', 'LGPL-3.0-only', 'MPL-2.0', 'Apache-2.0', 'MIT', 'BSD-2-Clause', 'BSD-3-Clause', 'N/A'],        
        name: 'license'
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'github',
        validate: function(response) {
            if (response.length < 1) {
                return console.log('Please enter a valid GitHub username so we can locate your correct badge.')
            } return true;
        }
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
        validate: function(response) {
            if (response.length < 1) {
                return console.log('Please enter a valid email address to populate in your Questions section.')
            } return true;
        }
    },
    {
        type: 'input',
        message: "What is your GitHub repo name?",
        name: 'repo',
        validate: function(response) {
            if (response.length < 1) {
                return console.log('Please enter a valid GitHub repo name so we can locate your correct badge.')
            } return true;
        }
    }
]; 

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    // Catch any errors and console log them  
    err ? console.log(err) : console.log("YourREADME.md has generated and is ready for use!"))
}



// Function to initialize app
function init() {
     // Initiate inquirer prompt with stored questions and assign variable response to user answers
    inquirer
        .prompt(questions)
        .then((response) => {
            // console.log(response);

            // Once all questions have run, console log that README.md is generating
            console.log('Generating your README (in progress) ... ');
            // Reference to function found on seperate js file located in 'utils' - assign variable 'markdown' to our mardown formatted result
            const markdown = generateMarkdown(response);
            // Use our writeToFile() to create new README.md file within directory
            writeToFile('YourREADME.md', markdown); 
    })
};
// Function call to initialize app
init();
