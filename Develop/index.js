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

    ])
    .then((data) => {
        const README = `${data.title.split(' ').join('')}.md`; 
        console.log(data);

        let v = generateMarkdown(data);
        fs.writeFile(README, v, (err) => {
            if(err) {
                console.error(err)
                return
            }
            console.log('SUCCESS!')
        })
    })
