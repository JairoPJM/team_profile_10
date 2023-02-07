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
  let html = 
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
      <title>Team Profile</title>
  </head>
  <body>
      <nav class="navbar navbar-dark bg-dark mb-5">
          <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
      </nav>
      <div class="container">
          <div class="row">
`;

  for (const member of team) {
    html +=`<div class="col-4">
    <div class="card mx-auto" style="width: 18rem">`

    html += `
    <h5 class="card-header">   ${member.name} <br /><br />(${member.getRole()}) </h5>
    <ul class="list-group list-group-flush">`;
    html += `<li class="list-group-item">ID number: ${member.id}</li>`;
    html += `<li class="list-group-item">Email:<a href="mailto:${member.email}"> ${member.email}</a></li>`;
  



    if (member.getRole() === 'Manager') {
      html += ` <li class="list-group-item">Office Number: ${member.officeNumber}</li>
        </ul>
      </div>
    </div>`;
    } else if (member.getRole() === 'Engineer') {
      html += `<li class="list-group-item">GitHub: <a href="https://github.com/${member.github}">${member.github}</a></li>
        </ul>
      </div>
    </div>`;
    } else if (member.getRole() === 'Intern') {
      html += ` <li class="list-group-item">School: ${member.school}</li>
        </ul>
      </div>
    </div>`;
    }
   
  }

  html += `  
      </div>
    </div>
  </body>
</html>`;

  fs.writeFileSync('./dist/index.html', html, 'utf-8');
  console.log('Team profile generated successfully!');
}
