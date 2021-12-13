const Employee = require("../library/Employee");

// This code defines the Engineer class. Engineer class extends the class of Employee so you don't have to grab repeated data again. Adds userName to pull engineer's Github user name.
class Engineer extends Employee {
    
    // Constructor for storing information on a new engineer
    constructor(name, id, email, github) {
        // Super is used to call functions on the parent class of Employee
        super(name, id, email)
            // This stores the Github user id
           this.github = github;

    }

        // This code will return the Github username and engineer role
            getGithub() {
                return this.github;

    }

            getRole() {
                return "Engineer";

    }
}

module.exports = Engineer;

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