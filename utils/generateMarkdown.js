// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
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

module.exports = generateMarkdown;
