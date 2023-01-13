import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"


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

    //we will check that in the object return the function with the name in the obj
    test('getUsuarioActivo should return an object', () => {

        const name = 'Dave';

        const user = getUsuarioActivo( name )
        console.log(user);

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        })
    })
})