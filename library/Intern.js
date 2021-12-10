const Employee = require("../library/Employee");

class Intern extends Employee {
    
    constructor(name, id, email, school) {
        
        super(name, id, email)
            this.school = school;

    }

            getSchool() {
                return this.school;

    }

            getRole() {
                return "Intern";

    }

}

module.exports = Intern;
// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`