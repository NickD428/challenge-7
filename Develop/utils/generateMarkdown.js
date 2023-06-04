// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Eclipse':
        return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
      case 'Mozilla':
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      case 'Unlicense':
        return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      default:
        return '';
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'MIT License';
      break;
    case 'Eclipse':
      return 'https://opensource.org/license/epl-1-0/';
      break;
    case 'Mozilla':
      return 'https://opensource.org/license/mpl-2-0/';
      break;
    case 'Unlicense':
      return 'https://opensource.org/license/unlicense/';
    default:
      return '';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
    ## License
    ${data.license}`
  } else {
    return '';
  }

}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.uses}
  
  ## License
  ${data.license}

  ## Contributing
  ${data.contribute}
  
  ## Tests
  ${data.test}
  
  ## Questions
  Project created by ${data.username}!
  Check out my other works here! https://github.com/${data.username}
  Questions? Contact me here: ${data.email}
  
`;
}

module.exports = generateMarkdown;
