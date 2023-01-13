import { getUser } from "../../src/base-pruebas/05-funciones"


describe('testing into 05-funciones', () => {

    test('getUser should return an object', ()=> {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
    }

    const user = getUser();
    // console.log(user);

    expect( testUser ).toEqual(user)

    })


    test('getUsuarioActivo should return an object', () => {
        
    })
})