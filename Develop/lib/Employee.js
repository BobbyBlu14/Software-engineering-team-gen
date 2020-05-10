// TODO: Write code to define and export the Employee class
/// create class Employee with constructor; repeat for Manager Intern and Engineer; use questions
class Employee {

constructor(name, id, email, employee, role) {

  this.name = name;
  this.id = id;
  this.email = email;
  this.employee = employee;
  this.role = "Employee";
}

getName() {

  return this.name;
}

getId(){
return this.id;
}

getEmail() {

  return this.email;
}
getRole() {

  return "Employee";
}
}

module.exports = Employee;
