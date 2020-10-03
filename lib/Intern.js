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