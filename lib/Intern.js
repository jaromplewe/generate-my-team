// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

module.exports = class Intern extends Employee {
    constructor(name, role, id, email, school) {
        super (name, role, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}