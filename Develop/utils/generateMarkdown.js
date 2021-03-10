

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
  return `# **${data.title}**
    \n## Table of contents
    \n*[Description](#description)
    \n*[Installation](#installation)
    \n*[Usage](#usage)
    \n*[Contribution Guidelines](#guidelines)
    \n*[Test Instructions](#test)
    \n*[Questions](#questionOne)
    \n*[License](#license)
    \n## Description
    \n ${data.description}
    \n## Installation
    \n ${data.installation}
    \n## Usage
    \n ${data.usage}
    \n## Contribution Guidelines
    \n ${data.guidelines}
    \n## Tests
    \n ${data.test}
    \n## Contributors
    \n ${data.questionOne}
    \n## Testing Instructions
    \n ${data.questionTwo}
    \n## GitHub Username
    \n ${data.questionThree}
    \n## Email Address
    \n ${data.questionFour}
    \n# Lincense
    \n ${data.license}
  `;
}

module.exports = generateMarkdown;
