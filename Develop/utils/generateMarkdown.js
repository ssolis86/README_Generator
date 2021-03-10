
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let response;
  switch (license) {
    case 'Apache':
      response = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'IBM':
      response = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
      break;
    case 'Mozilla':
      response = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Eclipse':
      response = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';  
      break;
    default:
      response = '';  
      break;
  }
  return response;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = renderLicenseLink(data.license);
  return `# **${data.title}**
    \n# Table of Contents
    \n  *[Description](#description)
    \n  *[Installation](#installation)
    \n  *[Usage](#usage)
    \n  *[Contribution Guidelines](#guidelines)
    \n  *[Test Instructions](#test)
    \n  *[Questions](#questionOne)
    \n  *[License](#license)
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
    \n ${license}
    \n 

  `;
}

module.exports = generateMarkdown;
