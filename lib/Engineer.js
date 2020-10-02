// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

module.exports =  class Engineer extends Employee {
    constructor(name, role, id, email, github) {
        super (name, role, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}