// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return 'MIT License';
      break;
    case 'Apache-2.0':
      return 'Apache 2.0 License';
      break;
    case 'GPL-3.0':
      return 'GPL 3.0 License';
      break;
    case 'GNU-3.0':
      return 'GNU 3.0 License';
      break;
    case 'BSD 2':
      return 'BSD 2 License';
      break;
    case 'BSD 3':
      return 'BSD 3 License';
      break;
    case 'Boost 1.0':
      return 'Boost 1.0 License';
      break;
    case 'Creative Commons 1.0':
      return 'Creative Commons 1.0 License';
      break;
    case 'Eclipse':
      return 'Eclipse License';
      break;
    case 'Mozilla':
      return 'Mozilla Public License';
      break;
    case 'Unlicense':
      return 'The Unlicense';
    default:
      return '';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
