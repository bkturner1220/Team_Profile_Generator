const manager = require("../library/Manager");


describe('Manager', () => {
    
});

    describe('Instantiation', () => {
   
        it('should pass instantiate object correctly ', () => {
            
let managerOne = new manager("Roger", 1, "RogerStone@gmail.com");


expect(managerOne.name).toBe("Roger")
expect(managerOne.id).toEqual(1)
expect(managerOne.email).toBe("RogerStone@gmail.com")

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

                let managerOne = new manager("Roger", 1, "RogerStone@gmail.com");

                let email = managerOne.getEmail()

                expect(email).toBe("RogerStone@gmail.com")


      
            })

        });

        describe('getRole', () => {
            it('should  ', () => {


      
        })

        });
