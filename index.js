const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const team = [];

const managerQuestions = [
  {
    type: "input",
    name: "managersName",
    message: "What is your managers name?",
  },
  {
    type: "input",
    name: "managersEmail",
    message: "What is your managers email?",
  },
  {
    type: "input",
    name: "managersId",
    message: "What is your managers id number?",
  },
  {
    type: "input",
    name: "managersOffice",
    message: "What is your managers office number?",
  },
];
inquirer.prompt(managerQuestions).then((answers) => {
  // console.log(answers);
  const newManager = new Manager(
    answers.managersName,
    answers.managersId,
    answers.managersEmail,
    answers.managersOffice
  );
  team.push(newManager);
  displayOptions();
});
function displayOptions() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menuChoice",
        message: "Choose a option",
        choices: ["Add a Intern", "Add a Engineer", "Finish team"],
      },
    ])
    .then((answers) => {
      if ((answers.menuChoice === "Add a Intern")) {
        displayIntern();
      }if((answers.menuChoice==="Add a Engineer")){
        displayEngineer();
      }if((answers.menuChoice==="Finish team")){
        console.log(team,"YAY")
        finish()
      }
      
    });
}
function displayEngineer(){
inquirer
.prompt([
  {
    type: "input",
    name: "engineersName",
    message: "What is your engineers name?"
  },
  {
    type: "input",
    name: "engineersEmail",
    message: "What is your engineers email?"
  },
  {
    type: "input",
    name: "engineersId",
    message: "What is your engineers id number?"
  },
  {
    type: "input",
    name: "engineersGithub",
    message: "What is your engineers Github name?"
  }
]).then((answers)=>{
  const newEngineer = new Engineer(answers.engineersName,answers.engineersId,answers.engineersEmail, answers.engineersGithub);
  team.push(newEngineer);
  // console.log(newEngineer);
  console.log(team);
  displayOptions()
})


}
function displayIntern(){
  inquirer
  .prompt([
  {
    type: "input",
    name: "internsName",
    message: "What is your interns name?"
  },
  {
    type: "input",
    name: "internsEmail",
    message: "What is your interns email?",
  },
  {
    type: "input",
    name: "internsId",
    message: "What is your interns id number?",
  },
  {
    type: "input",
    name: "internsSchool",
    message: "What is your interns school name?"
  }
]).then((answers)=>{
  const newIntern = new Intern(answers.internsName,answers.internsId,answers.internsEmail, answers.internsSchool);
  team.push(newIntern);
  // console.log(newIntern);
  console.log(team);
  displayOptions()
})
}



function finish() {
  let html = '<!DOCTYPE html><html><head><title>Team Profile</title></head><body>';
  html += '<h1>Team Profile</h1>';

  for (const member of team) {
    html += `<h2>${member.name} (${member.getRole()})</h2>`;
    html += `<p>ID: ${member.id}</p>`;
    html += `<p>Email: ${member.email}</p>`;
    if (member.getRole() === 'Manager') {
      html += `<p>Office Number: ${member.officeNumber}</p>`;
    } else if (member.getRole() === 'Engineer') {
      html += `<p>GitHub: ${member.github}</p>`;
    } else if (member.getRole() === 'Intern') {
      html += `<p>School: ${member.school}</p>`;
    }
  }

  html += '</body></html>';

  fs.writeFileSync('team.html', html, 'utf-8');
  console.log('Team profile generated successfully!');
}
