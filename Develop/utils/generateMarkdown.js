// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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
  
  ## Author
  Project created by ${data.username}!
  
`;
}

module.exports = generateMarkdown;
