const Employee = require("../library/Employee");

class Manager extends Employee {
    
    constructor(name, id, email, officeNumber) {
        
        super(name, id, email, officeNumber)
            this.officeNumber = officeNumber;

    }

    getOfficeNumber() {
        return this.officeNumber;

    }

    getRole() {
        return "Manager";

    }





}

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `officeNumber()`

// * `getRole()`&mdash;returns `'Manager'`

