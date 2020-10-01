// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(employeeInfo) {
        super (employeeInfo);
        this.school = employeeInfo.school;
    }
    getSchool() {
        return this.school;
    }
}