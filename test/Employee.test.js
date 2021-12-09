const Employee = require("../library/Employee");

describe('Employee', () => {
    
});

    describe('Instantiation', () => {
   
        it('should pass instantiate object correctly ', () => {
            
let employeeOne = new Employee("jason", 1, "JasonDay@gmail.com");


expect(employeeOne.name).toBe("Jason")
expect(employeeOne.id).toEqual(1)
expect(employeeOne.email).toBe("JasonDay@gmail.com")

        });





    });

        describe('getName', () => {
            it('should  ', () => {


        
            })
        });

        describe('getId', () => {
            it('should  ', () => {

    
            })
        });

        describe('getEmail', () => {
            it('should return correct email', () => {

                let employeeOne = new Employee("jason", 1, "JasonDay@gmail.com");

                let email = employeeOne.getEmail()

                expect(email).toBe("JasonDay@gmail.com")


      
            })

        });

        describe('getRole', () => {
            it('should  ', () => {


      
        })

        });
