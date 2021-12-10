const Intern = require("../library/Intern");
const Employee = require("../library/Employee");


describe('Intern', () => {
    
});

describe('Instantiation', () => {
   
    it('should pass instantiate object correctly for Intern', () => {
        
        let internOne = new Intern("Donald", 1, "DonaldTrump@gmail.com", "SMU");
            expect(internOne.name).toBe("Donald");
                expect(internOne.id).toEqual(1);
                    expect(internOne.email).toBe("DonaldTrump@gmail.com");
                        expect(school).toBe("SMU");
    });
});

    // describe('getName', () => {
    //     it('should return correct name of Intern  ', () => {

    //         let internOne = new Intern("Donald", 1, "DonaldTrump@gmail.com", "SMU");
    //         let name = internOne.getName();
    //             expect(name).toBe("Donald");       
    //     })
    // });

    // describe('getId', () => {
    //     it('should return correct id of Intern  ', () => {

    //         let internOne = new Intern("Donald", 1, "DonaldTrump@gmail.com", "SMU");
    //         let id = internOne.getI();
    //             expect(email).toBe("DonaldTrump@gmail.com");    
    //     })
    // });

    // describe('getEmail', () => {
    //     it('should return correct email of Intern', () => {
            
    //         let internOne = new Intern("Donald", 1, "DonaldTrump@gmail.com", "SMU");
    //         let email = internOne.getEmail();
    //             expect(email).toBe("DonaldTrump@gmail.com");      
    //     })
    // });

    describe('getSchool', () => {
        it('should return correct email of Intern', () => {
            
            let internOne = new Intern("Donald", 1, "DonaldTrump@gmail.com", "SMU");
            let school = internOne.getSchool();
                expect(school).toBe("SMU");      
        })
    });

    describe('getRole', () => {
        it('should return correct role of \"Intern\""  ', () => {

            let internOne = new Intern("Donald", 1, "DonaldTrump@gmail.com", "SMU");
            let role = internOne.getRole();
                expect(role).toBe("Intern");

  
        })
    });