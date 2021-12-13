const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./library/Employee')
const Manager = require("./library/Manager");
const Intern = require("./library/Intern");
const Engineer = require("./library/Engineer");
const generateMarkdown = require('./src/generateMarkdown.js');
const employeeArray = [];


// The first function of app to find out which path to go in the first list selection
const newEmployee = () => {
inquirer.prompt ([
    {
        type:"list",
        name: "teamSelect",
        message: "Please select role that will be part of the software's engineering team!",
        choices: [{ name: "Intern", value: 0 }, { name: "Engineer", value: 1 }, { name: "Manager", value: 2}, { name: "Done", value: 3}]
    }
])
  .then((response) => {
         if (response.teamSelect === 0) {
            console.clear();
            console.log('Creating new Intern...');
            promptIntern();
         }
         else if (response.teamSelect === 1) {
            console.clear();
            console.log('Creating new Engineer...');
            promptEngineer();
         }
         else if (response.teamSelect === 2) {
            console.clear();
            console.log('Creating new Manager...');
            promptManager();
         }
         else {
            console.clear();
            console.log("Goodbye!");
         }
    })    
};

//Intern inquirer prompt for employee data
const promptIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter First and Last name of Intern?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter the ID number of the Intern?',
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter Intern's email address?",
    },
    {
      type: 'input',
      name: 'school',
      message: "Please enter name of school that Intern may be attending at this time?",
    },
  ])
  .then(({name, id, email, school}) => {
    employeeArray.push(new Intern(name, id, email, school ));
    makeEmployee();
})
}

//Engineer inquirer prompt for employee data
const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter First and Last name of Engineer?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter the ID number of the Engineer?',
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter Engineer's email address?",
    },
    {
      type: 'input',
      name: 'github',
      message: "Please enter Engineer's Github username?",
    },
  ])
  .then(({name, id, email, github}) => {
    employeeArray.push(new Engineer(name, id, email, github ));
    makeEmployee();
})
}

//Manager inquirer prompt for employee data
const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter First and Last name of Manager?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter the ID number of the Manager?',
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter Manager's email address?",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter Manager's office number?",
    },
  ])
    .then(({name, id, email, officeNumber}) => {
      employeeArray.push(new Manager(name, id, email, officeNumber ));
      makeEmployee();
  })
}

// generate data function to render to html doc
makeEmployee = () => {
      
  writeFile();
}

// write file function to write to index.html.  This function is part of NodeJs file system
writeFile = () => {
  fs.writeFile('./dist/index.html', generateMarkdown(employeeArray), "utf-8", (err) => {
      if (err) throw err;

      console.log('Employee card has been created!');
      // start over just in case a new employee wants to be created
      newEmployee();
  });
}

// start app so employees input can be entered and the data render to html format 
newEmployee();
