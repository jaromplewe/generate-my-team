// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

module.exports = class Manager extends Employee {
    constructor(employeeInfo) {
        super (employeeInfo);
        this.officeNumber = employeeInfo.officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}