const Intern = require("../library/Intern");

describe('Intern', () => {
    
});

describe('Instantiation', () => {
   
    it('should pass instantiate object correctly for Intern', () => {
        
        let internOne = new Intern("Donald", 1, "DonaldTrump@gmail.com", "SMU");
            expect(internOne.name).toBe("Donald");
                expect(internOne.id).toEqual(1);
                    expect(internOne.email).toBe("DonaldTrump@gmail.com");
                        expect(internOne.school).toBe("SMU");
    });
});

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