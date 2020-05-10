// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//addition to `Employee`'s properties and methods, `Engineer` will also have:

  //* github  // GitHub username

  //* getGithub()

  //* getRole() // Overridden to return 'Engineer'
  const inquirer = require("inquirer");
  const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, gitUser) {
       super(name, id, email)
        this.github = gitUser ;
    }


getGithub() {


    return this.github;
}

getRole() {
    return "Engineer";
};
}
  
  module.exports = Engineer;