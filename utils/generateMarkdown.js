

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(response) {
  if (response.license !== 'N/A') {
    return `[![License](https://img.shields.io/github/license/${response.github}/${response.repo})]`
  } else {
    return ``;
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(response) {
  if (response.license !== 'N/A') {
    return `(https://opensource.org/licenses/${response.license})`
  } else {
    return ``;
  }
}

// Function that returns the license section of README, if there are no installation instructions, return an empty string
function renderLicenseSection(response) {
  if (response.license !== 'N/A') {
    return `<!-- LICENSE -->
  ## License

  **This project is protected under the ${response.license} license. See LICENSE.txt for more information.**
  `
  } else {
    return ``;
  }
}

// Function that returns the installation section of README, if there are no installation instructions, return an empty string
function renderInstallSection(response) {
  if (response.install !== '') {
    return `<!-- INSTALLATION -->
  ## Installation
  *To install everything needed to run this application, run the following command(s):*

    ${response.install}
  
`
  } else {
    return ``;
  }
}

// Function that returns the testing section of README, if there are no tests to run, return an empty string
function renderTestingSection(response) {
  if (response.test !== '') {
    return `<!-- TESTING -->
  ## Testing
  *See contribution guidelines if you have more test ideas!*

  ${response.test}
  
`
  } else {
    return ``;
  }
}

// Function to generate markdown for README
function generateMarkdown(response) {
  // Using above functions to validate certain response sections, we store all responses in some constant references for later use in this function
  const firstHalf = renderLicenseBadge(response);
  const secondHalf = renderLicenseLink(response);
  const licenseSec = renderLicenseSection(response);
  const installSec = renderInstallSection(response);
  const testSec = renderTestingSection(response);

  // Draft Table of Contents based on which sections a user includes in their responses
  let ToC = `<!-- TABLE OF CONTENTS -->
  ## Table of Contents
  * [Description](#description)
  `;

  if (installSec !== '') {
    ToC += `* [Installation](#installation)
  `
  }

  ToC += `* [Usage](#usage)
  * [Contributing](#contributing)
  `

  if (licenseSec !== '') {
    ToC += `* [License](#license)
  `
  }

  if (testSec !== '') {
    ToC += `* [Testing](#testing)
  `
  }

  ToC += `* [Questions](#questions)
  `

  // We start drafting YourREADME.md here - pulling required prompts directly from user input and non-required prompts from above constant references
  return `${firstHalf}${secondHalf}

  # ${response.title}
  
  ${ToC}

  <!-- DESCRIPTION -->
  ## Description

  ${response.description}

  ${installSec}
  
  <!-- USAGE EXAMPLES -->
  ## Usage
  *This section outlines each step in the usage of application.*
  
  ${response.usage}
  
  <!-- CONTRIBUTING -->
  ## Contributing
  *Here are the guidelines/recommendations when it comes to contributing to this project:*

  ${response.contributions}
  
  ${licenseSec}

  ${testSec}

  <!-- QUESTIONS -->
  ## Questions

  **You are welcome to reach out via email: [${response.email}](mailto:${response.email}) - or check me out on [GitHub!](https://github.com/${response.github}) (https://github.com/${response.github})**
  
`;
 
  
}

module.exports = generateMarkdown;

