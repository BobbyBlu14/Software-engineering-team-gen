const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");


// // Write code to use inquirer to gather information about the development team members,
// //class App {
//    // constructor() {
//   //      this.TeamMember = {
//  //           manager: null,
//   //          engineers: [], // Array of engineer object instances,
// //interns: [], // Also array of intern object intances
//   //      }
//     }
// }

function teamRole() {
    inquirer.prompt([
        {

            type: 'input',
            message: 'What is Team Members name?',
            name: 'name',
        },
        {

            type: 'input',
            message: 'What is your ID?',
            name: 'id'
        },
        {

            type: 'input',
            message: 'What is your email?',
            name: 'email',
        }
    
    ])

    
    .then.extends(function(response){
        console.log(response);
        {
            type: "select",
            Option : "Manager",
            Option : "Intern",
            Option : "Engineer",
            name: "role",
            when: (userInput) => userInput.employeeRole === "Engineer"
        },
        {
            type: "input",
            message: "What's the Intern's name?",
            name: "internName",
            when: (userInput) => userInput.employeeRole === "Intern"
        },
        {
            type: "confirm",
            name: "newEmployee",
            message: "Would you like to add another team member?"
        },
    ] }

switch (employeeInfo.title.toLowerCase()) {
    case 'manager':
        employeeInfo = await this.getOfficeNumber(employeeInfo);
        break;
    case 'engineer':
        employeeInfo = await this.getGithubHandle(employeeInfo);
        break;
    case 'intern':
        employeeInfo = await this.getSchoolInfo(employeeInfo);
        break;
    default:
        break;

}

return employeeInfo;
}

async getOfficeNumber(employeeInfo) {
const managerInfo =
    await inquirer
        .prompt([
            {
                type: "input",
                message: "Office Number: ",
                name: "officeNumber"
            }
        ])

employeeInfo.officeNumber = await managerInfo.officeNumber;

return employeeInfo;
}

async getGithubHandle(employeeInfo) {
let engineerInfo =
    await inquirer
        .prompt([
            {
                type: "input",
                message: "GitHub handle: ",
                name: "github"
            }
        ]);

employeeInfo.github = await engineerInfo.github;

return employeeInfo;
}

async getSchoolInfo(employeeInfo) {
let internInfo =
    await inquirer
        .prompt([
            {
                type: "input",
                message: "School: ",
                name: "school"
            }
        ]);

employeeInfo.school = internInfo.school;

return employeeInfo;
}

createEmployee(employeeInfo) {
let employee;
const { id, name, email } = employeeInfo;
switch (employeeInfo.title.toLowerCase()) {
    case 'manager':
        const manager = new Manager(name, id, email, employeeInfo.officeNumber);
        employee = manager;
        break;
    case 'engineer':
        const engineer = new Engineer(name, id, email, employeeInfo.github);
        employee = engineer;
        break;
    case 'intern':
        const intern = new Intern(name, id, email, employeeInfo.school);
        employee = intern;
        break;
    default:
        break;
}

return employee;
}

saveEmployeeToteamRole(employee) {
switch (employee.getRole().toLowerCase()) {
    case 'manager':
        this.teamRole.manager = employee;
        break;
    case 'engineer':
        this.teamRole.engineers.push(employee);
        break;
    case 'intern':
        this.teamRole.interns.push(employee);
        break;
    default:
        break;
}
}

createTeamRoster() {

let managerProfile = '';
let engineers = '';
let interns = '';

if (this.teamRole.manager) {
    managerProfile = new ManagerProfile(this.teamRole.manager);
    managerProfile = managerProfile.createProfile();
}

if (this.teamRole.engineers) {
    for (const engineer of this.teamRole.engineers) {
        let engineerProfile = new EngineerProfile(engineer);
        engineerProfile = engineerProfile.createProfile();

        engineers += engineerProfile;
    }
}

if (this.teamRole.interns) {
    for (const intern of this.teamRole.interns) {
        let internProfile = new InternProfile(intern);
        internProfile = internProfile.createProfile();

        engineers += internProfile;
    }
}

const team = managerProfile + engineers + interns;

let teamRoster = new TeamRoster(team);
teamRoster = teamRoster.createTeamRoster();

return teamRoster;
}

createServer(teamRoster) {

fs.writeFile('./public/team.html', teamRoster, function (err) {
    if (err) throw err;
    console.log('Saved!');
});

   teamRole();

   
function renderEmployees(name, id, title) {
    var template = document.getElementById('template').innerHTML;
    var path = path.render(template, { name: 'Crystal' });
    document.getElementById('target').innerHTML = rendered;
};