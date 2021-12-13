const Engineer = require("../library/Engineer");

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
