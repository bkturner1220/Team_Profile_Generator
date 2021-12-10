const Employee = require("../library/Employee");

describe('Employee', () => {
    
});

describe('Instantiation', () => {
   
    it('should pass instantiate object correctly ', () => {
        
        let employeeOne = new Employee("Donald", 1, "DonaldTrump@gmail.com");
            expect(employeeOne.name).toBe("Donald");
                expect(employeeOne.id).toEqual(1);
                    expect(employeeOne.email).toBe("DonaldTrump@gmail.com");
    });
});

    describe('getName', () => {
        it('should return correct name of Employee', () => {

            let employeeOne = new Employee("Donald", 1, "DonaldTrump@gmail.com");
            let name = employeeOne.getName();
                expect(name).toBe("Donald");        
        })
    });

    describe('getId', () => {
        it('should return correct id of Employee', () => {

            let employeeOne = new Employee("Donald", 1, "DonaldTrump@gmail.com");
            let id = employeeOne.getI();
                expect(email).toBe("DonaldTrump@gmail.com");    
        })
    });

    describe('getEmail', () => {
        it('should return correct email of Employee', () => {
            
            let employeeOne = new Employee("Donald", 1, "DonaldTrump@gmail.com");
            let email = employeeOne.getEmail();
                expect(email).toBe("DonaldTrump@gmail.com");      
        })
    });

    describe('getRole', () => {
        it('should return correct role of \"Employee\""  ', () => {

            let employeeOne = new Manager("Donald", 1, "DonaldTrump@gmail.com");
            let role = employeeOne.getRole();
                expect(role).toBe("Employee");
        })
    });
