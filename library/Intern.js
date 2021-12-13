const Employee = require("../library/Employee");

// This code defines the Intern class. Intern class extends the class of Employee so you don't have to grab repeated data again. Adds school to pull intern's school name.
class Intern extends Employee {
     // Constructor for storing information on a new intern
    constructor(name, id, email, school) {
        // Super is used to call functions on the parent class of Employee
        super(name, id, email)
            // This stores the school name
            this.school = school;

    }
                // This code will return the school name and intern role
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