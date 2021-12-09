const Employee = require("../library/Employee");

class Engineer extends Employee {

    constructor(name, id, email, github) {
       
        super(name, id, email, github)
           this.github = github;

    }

    getGithub() {
        return this.github;

    }

    getRole() {
        return "Engineer";

    }


}

// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`