// TODO: Include packages needed for this application
//installed packages in terminal
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    
    //Q1 TITLE
    {
        type: 'title',
        name: 'projectTitle',
        message: 'Enter the Title of your project',
        validate: projectTitleInput => {
            if(projectTitleInput) {
                return true;
            } else {
                console.log('Dont forget the Title!!');
                return false; 
            }
        }
    },
    
    //Q2 DESCRIPTION
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please enter a description of your project',
        validate: projectDescriptionInput => {
            if(projectDescriptionInput) {
                return true;
            } else {
                console.log('Description field required');
                return false; 
            }
        }
    },


    //Q3 USAGE
    {
    type: 'input',
    name: 'projectUsage',
    message: 'Please describe the usage of your project',
    validate: projectUsageInput => {
        if(projectUsageInput) {
            return true;
        } else {
            console.log('Usage field required');
            return false; 
        }
    }
},

//Q4 INSTALLATION
{
type: 'input',
name: 'projectInstallation',
message: 'PLease provide installation instructions',
validate: projectInstallationInput => {
    if(projectInstallationInput) {
        return true;
    } else {
        console.log('Installation instructions required')
        return false;
    }
}
},
    
    //Q5 LICENSE
    {        type: 'list',
        name: 'licenseOptions',
        message: 'Please select a license' ,
        choices: [
            'Apache 2.0', 
            'MIT', 
            'GPL 3.0', 
            'None'
        ],
        
    },
    // Q6 CONTRIBUTION
   {
    type: 'input', 
    name:'projectContribution',
    message: 'List people the contributed to this project'
   },
  
     //Q7 USERNAME
    {
        
        type: 'input',
        name: 'username',
        message: 'Please enter your username' ,
        validate: usernameInput => {
            if(usernameInput) {
                return true;
            }else {
                console.log('Username field required');
                return false;
            }
        }
    },

    //Q8 EMAIL

    {
      
        type: 'input',
        name: 'emailAddress',
        message: ' Please enter your email address' ,
        validate: usernameInput => {
            if(usernameInput) {
                return true;
            }else {
                console.log('Email field required');
                return false;
            }
        }
    },
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(` File has been written successfully.`);
});
};

// TODO: Create a function to initialize app
function init() {
    console.log(`
    README GENERATOR
    `);

    inquirer.prompt(questions)
    .then(readmeData => {
        // console.log(readmeData);
        writeToFile("./read/readme.md", generateMarkdown(readmeData))
    })
};

// Function call to initialize app
init();
