const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of the project you are starting.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'List installation instructions for user',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information.',
        },
        {
            type: 'input',
            name: 'guidelines',
            message: "Enter contribution guidelines.",
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter test instructions for application',
        },

    ])
    .then((data) => {
        const README = `${data.title.split(' ').join('')}.md`; 
        console.log(data);

        let responses = generateMarkdown(data);
        fs.writeFile(README, responses, (err) => {
            if(err) {
                console.error(err)
                return
            }
            console.log('SUCCESS!')
        })
    })
