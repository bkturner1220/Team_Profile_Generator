const Manager = require("../library/Manager");
const Employee = require("../library/Employee");


describe('Manager', () => {
    
});

describe('Instantiation', () => {
   
    it('should pass instantiate object correctly for Manager', () => {
        
        let managerOne = new Manager("Donald", 1, "DonaldTrump@gmail.com", "(972)555-1111");
            expect(managerOne.name).toBe("Donald");
                expect(managerOne.id).toEqual(1);
                    expect(managerOne.email).toBe("DonaldTrump@gmail.com");
                        expect(officeNumber).toBe("(972)555-1111");
    });
});

    // describe('getName', () => {
    //     it('should return correct name of Manager  ', () => {

    //         let managerOne = new Manager("Donald", 1, "DonaldTrump@gmail.com", "(972)555-1111");
    //         let name = managerOne.getName();
    //             expect(name).toBe("Donald");       
    //     })
    // });

    // describe('getId', () => {
    //     it('should return correct id of Manager  ', () => {

    //         let managerOne = new Manager("Donald", 1, "DonaldTrump@gmail.com", "(972)555-1111");
    //         let id = managerOne.getI();
    //             expect(email).toBe("DonaldTrump@gmail.com");    
    //     })
    // });

    // describe('getEmail', () => {
    //     it('should return correct email of Manager', () => {
            
    //         let managerOne = new Manager("Donald", 1, "DonaldTrump@gmail.com", "(972)555-1111");
    //         let email = managerOne.getEmail();
    //             expect(email).toBe("DonaldTrump@gmail.com");      
    //     })
    // });

    describe('getOfficeNumber', () => {
        it('should return correct email of Manager', () => {
            
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