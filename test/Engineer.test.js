const Employee = require("../library/Engineer");

describe('Engineer', () => {
    
});

    describe('Instantiation', () => {
   
        it('should pass instantiate object correctly ', () => {
            
let engineerOne = new engineer("Donald", 1, "DonaldTrump@gmail.com");


expect(engineerOne.name).toBe("Donald")
expect(engineerOne.id).toEqual(1)
expect(engineerOne.email).toBe("DonaldTrump@gmail.com")

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

                let engineerOne = new engineer("Donald", 1, "DonaldTrump@gmail.com");

                let email = engineerOne.getEmail()

                expect(email).toBe("DonaldTrump@gmail.com")


      
            })

        });

        describe('getRole', () => {
            it('should  ', () => {


      
        })

        });
