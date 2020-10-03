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