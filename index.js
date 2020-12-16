const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown.js')



// array of questions for user
const questions = [
  {
      type: 'input',
      name: 'title',
      message: 'What is title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe what you project is about?',  
    },

    {
        type: 'input',
        name: 'install',
        message: 'What packages do I need to install?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do I use your project?',
      },
      {
        type: 'list',
        name: 'licenses',
        message: 'What licenses did you use?',
        choices: ['license 1',' license 2', 'license 3']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How does one contribute to your project?',
          },
          {
            type: 'input',
            name: 'questions',
            message: 'What is your github user name?',
          },
          {
            type: 'input',
            name: 'tests',
            message: 'What tests have you ran on your projects?',
          },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions).then((data) => {
        const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
        console.log(fileName)
    });

}

// function call to initialize program
init();
