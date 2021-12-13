const Manager = require("../library/Manager");

describe('Manager', () => {
    
});

describe('Instantiation', () => {
   
    it('should pass instantiate object correctly for Manager', () => {
        
        let managerOne = new Manager("Donald", 1, "DonaldTrump@gmail.com", "(972)555-1111");
            expect(managerOne.name).toBe("Donald");
                expect(managerOne.id).toEqual(1);
                    expect(managerOne.email).toBe("DonaldTrump@gmail.com");
                        expect(managerOne.officeNumber).toBe("(972)555-1111");
    });
});

    describe('getOfficeNumber', () => {
        it('should return correct office number of Manager', () => {
            
            let managerOne = new Manager("Donald", 1, "DonaldTrump@gmail.com", "(972)555-1111");
            let officeNumber = managerOne.getOfficeNumber();
                expect(officeNumber).toBe("(972)555-1111");      
        })
    });

    describe('getRole', () => {
        it('should return correct role of \"Manager\""  ', () => {

            let managerOne = new Manager("Donald", 1, "DonaldTrump@gmail.com", "SMU");
            let role = managerOne.getRole();
                expect(role).toBe("Manager");

        })
    });