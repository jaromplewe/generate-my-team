// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

module.exports =  class Engineer extends Employee {
    constructor(employeeInfo) {
        super (employeeInfo);
        this.github = employeeInfo.github;
    }
    getGithub() {
        return this.github;
    }
}