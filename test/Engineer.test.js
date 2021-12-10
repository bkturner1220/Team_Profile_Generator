const Engineer = require("../library/Engineer");
const Employee = require("../library/Employee");

describe('Engineer', () => {
    
});

    describe('Instantiation', () => {
   
        it('should pass instantiate object correctly ', () => {
            
            let engineerOne = new Engineer("Donald", 1, "DonaldTrump@gmail.com", "DkTrump1212");
                expect(engineerOne.name).toBe("Donald");
                    expect(engineerOne.id).toEqual(1);
                        expect(engineerOne.email).toBe("DonaldTrump@gmail.com");
                            expect(engineerOne.github).toBe("DkTrump1212");
        });
    });

        // describe('getName', () => {
        //     it('should return correct name of Engineer  ', () => {

        //         let engineerOne = new Engineer("Donald", 1, "DonaldTrump@gmail.com", "DkTrump1212");
        //         let name = engineerOne.getName();
        //             expect(name).toBe("Donald");        
        //     })
        // });

        // describe('getId', () => {
        //     it('should return correct id of Engineer  ', () => {

        //         let engineerOne = new Engineer("Donald", 1, "DonaldTrump@gmail.com", "DkTrump1212");
        //         let id = engineerOne.getI();
        //             expect(email).toBe("DonaldTrump@gmail.com");    
        //     })
        // });

        // describe('getEmail', () => {
        //     it('should return correct email of Engineer', () => {
                
        //         let engineerOne = new Engineer("Donald", 1, "DonaldTrump@gmail.com", "DkTrump1212");
        //         let email = engineerOne.getEmail();
        //             expect(email).toBe("DonaldTrump@gmail.com");      
        //     })
        // });

        describe('getGithub', () => {
            it('should return correct github username of Engineer', () => {
                
                let engineerOne = new Engineer("Donald", 1, "DonaldTrump@gmail.com", "DkTrump1212");
                let github = engineerOne.getGithub();
                    expect(github).toBe("DkTrump1212");      
            })
        });

        describe('getRole', () => {
            it('should return correct role of \"Engineer\""  ', () => {
    
                let engineerOne = new Engineer("Donald", 1, "DonaldTrump@gmail.com", "DkTrump1212");
                let role = engineerOne.getRole();
                    expect(role).toBe("Engineer");
            })
        });
