const Employee = require("./Employee");

module.exports = class Manager extends Employee {
    constructor(name, role, id, email, officeNumber) {
        super (name, role, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}