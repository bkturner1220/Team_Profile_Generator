

class Employee {
    

// The first class is an `Employee` parent class with the following properties and methods:

// * `name`
        constructor(name, id, email){
            this.name = name;
            this.id = id;
            this.email = email;

        }

            getName() {
            return this.name;

        }

            getId() {
                return this.id;

            }


            getEmail() {
                return this.email

            }



}

module.exports = Employee;

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// The other three classes will extend `Employee`.

