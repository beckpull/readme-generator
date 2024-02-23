// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title'
    },
    {
        type: 'input',
        message: "Next, we need a description - what should we put there?",
        name: 'description'
    },
    {
        type: 'input',
        message: "How would a user go to install your application?",
        name: 'install',
    },
    {
        type: 'input',
        message: "How about some usage instructions?",
        name: 'usage'
    },
    {
        type: 'input',
        message: "What are your guidlines for users who want to contribute?",
        name: 'contributions'
    },
    {
        type: 'input',
        message: "How about how users can test your product?",
        name: 'test'
    },
    {   type: 'list',
        message: "Which license did you use for your project?",
        choices: ["MIT", "Apache", "BSD", "GPL", "AGPL", "LGPL"],
        name: 'license'
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'github'
    },
    {
        type: 'input',
        message: "What is your LinkedIn URL?",
        name: 'linkedin'
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email'
    }
];



inquirer
    .prompt(questions)
    .then((response) => { 
    const{title, description, install, usage, contributions, test, license, github, linkedin,email} = response;
    function generateMarkdown(data) {
        return `
        <a name="readme-top"></a>
      
        # ${title}
        
        
        <!-- TABLE OF CONTENTS -->
        <details>
          <summary>Table of Contents</summary>
          <ol>
            <li><a href="#description">Description</a></li>
            <li><a href="#installation">Installation</a></li>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#contributing">Contributing</a></li>
            <li><a href="#license">License</a></li>
            <li><a href="#tests">Tests</a></li>
            <li><a href="#questions">Questions</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#acknowledgments">Acknowledgements</a></li>
          </ol>
        </details>
        
        <!-- DESCRIPTION -->
        ## Description
        
        ${description}
      
        <p align="right">(<a href="#readme-top">back to top</a>)</p>
        
        <!-- INSTALLATION -->
        ## Installation
        ${install}
        <p align="right">(<a href="#readme-top">back to top</a>)</p>
        
        <!-- USAGE EXAMPLES -->
        ## Usage
      
        This section outlines each step in this application.
        
        ${usage}
        
        <p align="right">(<a href="#readme-top">back to top</a>)</p>
        
        <!-- CONTRIBUTING -->
        ## Contributing
        
        ${contributions}
        
        <p align="right">(<a href="#readme-top">back to top</a>)</p>
      
        <!-- TEST -->
        ## Testing
        ${test}
      
        <p align="right">(<a href="#readme-top">back to top</a>)</p>
      
        <!-- LICENSE -->
        ## License
        
        ${license}
        
        <p align="right">(<a href="#readme-top">back to top</a>)</p>
      
        <!-- QUESTIONS -->
        ## Questions?
      
        [Email me](mailto:${email}) - or check me out on [GitHub](https://github.com/${github}) or [LinkedIn!](${linkedin})
        
        <p align="right">(<a href="#readme-top">back to top</a>)</p>
        
        <!-- ACKNOWLEDGMENTS -->
        ## Acknowledgments
        
        * This README file was created using the template found at: https://github.com/othneildrew/Best-README-Template
        
        <p align="right">(<a href="#readme-top">back to top</a>)</p>
      `;
      }
        let fileName = 'README.md';
        writeToFile(fileName, generateMarkdown(response));
    })


    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log("Done!"))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
