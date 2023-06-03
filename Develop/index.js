// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const createReadme = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
 {
    type: 'input',
    name: 'username',
    message: 'What is your Github username?',
 },
 {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
 },
 {
    type: 'input',
    name: 'description',
    message: 'Please provide a short description of the project',
 },
 {
    type: 'input',
    name: 'installation',
    message: 'How would I install the project?',
 },
 {
    type: 'input',
    name: 'uses',
    message: 'What is a use case for your project?',
 },
 {
    type: 'input',
    name: 'license',
    message: 'What kind of license are you using?',
 },
 {
    type: 'input',
    name: 'contribute',
    message: 'How would I contribute to your project?',
 },
 {
    type: 'input',
    name: 'test',
    message: 'How would I test your project?',
 }

];

// TODO: Create a function to write README file
   function writeToFile(fileName, data) {
      fs.writeFile(fileName, data, (err) => 
      err ? console.error(err) : console.log('Success!')
      );
   }
// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then(answers => {
         readmeContent = createReadme(answers);
         writeToFile('Readme.md', readmeContent);
      })
      .catch(err => {
         console.error(err);
      })
}

// Function call to initialize app
init();
