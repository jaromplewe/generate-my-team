// TODO: Write code to define and export the Employee class
module.exports = class Employee {
    constructor(employeeInfo) {
        this.name = employeeInfo.name;
        this.role = employeeInfo.role;
        this.id = employeeInfo.id;
        this.email = employeeInfo.email;
    }
    getName() {
        return this.name;
    }
    getRole() {
        return this.role;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
}