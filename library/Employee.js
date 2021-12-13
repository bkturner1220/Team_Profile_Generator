
// This code defines the Employee class.
class Employee {
    
        constructor(name, id, email){
            
            // Constructor for creating a new employee with supplied information. Employees encompass Intern, Engineer, and Manager.
            this.name = name;
            this.id = id;
            this.email = email;

        }

         // This code will return the name, id, email and what this object functionally is, the string: 'employee'
                getName() {
                    return this.name;

        }

                getId() {
                    return this.id;

        }


                getEmail() {
                    return this.email;

        }

                getRole() {
                    return "Employee";

        }



}

module.exports = Employee;

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// The other three classes will extend `Employee`.

