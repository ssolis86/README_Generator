const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of your README file: ',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of the project you are starting: ',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'List installation instructions for user: ',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How will someone use this application?  ',
        },
        {
            type: 'input',
            name: 'guidelines',
            message: "Enter contribution guidelines: ",
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter test instructions for application: ',
        },
        {
            type: 'input',
            name: 'questionOne',
            message: 'Are there any other contributors to this project? ',
        },
        {
            type: 'input',
            name: 'questionTwo',
            message: 'Please list test instructions for this application: ',
        },
        {
            type: 'input',
            name: 'questionThree',
            message: 'What is your gitHub username? ',
        },
        {
            type: 'input',
            name: 'questionFour',
            message: 'What is your email address? ',
        },
        {
            type: 'list',
            message: 'Choose a license for this project: ',
            name: 'license',
            choices: ['Apache', 'IBM', 'Mozilla', 'Eclipse'],
          },
    ])
    .then((data) => {
        const README = `${data.title.split(' ').join('')}.md`; 
        let responses = generateMarkdown(data);
        fs.writeFile(README, responses, (err) => {
            if(err) {
                console.error(err)
                return
            }
            console.log('SUCCESS!')
        })
    })
