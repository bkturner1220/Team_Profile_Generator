const Employee = require("../library/Employee");

describe('Employee', () => {
    
});

    describe('Instantiation', () => {
   
        it('should pass instantiate object correctly ', () => {
            
//Arrange
let testEmployee = new Employee("jason", 1, "JasonDay@gmail.com");

expect(testEmployee.name).toBe("Jason")

        });



//Act
//Assert

    });

        describe('getEmail', () => {
            
        });




