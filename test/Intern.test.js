const Employee = require("../library/Intern");


describe('Intern', () => {
    
});

    describe('Instantiation', () => {
   
        it('should pass instantiate object correctly ', () => {
            
let internOne = new intern("Phil", 1, "PhilNewton@gmail.com");


expect(internOne.name).toBe("Phil")
expect(internOne.id).toEqual(1)
expect(internOne.email).toBe("PhilNewton@gmail.com")

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

                let internOne = new intern("Phil", 1, "PhilNewton@gmail.com");

                let email = internOne.getEmail()

                expect(email).toBe("PhilNewton@gmail.com")


      
            })

        });

        describe('getRole', () => {
            it('should  ', () => {


      
        })

        });
