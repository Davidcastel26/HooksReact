import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('testing 09-promesas', () => {
    
    test('getHeroByIdAsync should return an hero', ( done ) => {

        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {

                expect( hero ).toEqual( {
                    id:1,
                    name:'Batman',
                    owner:'DC'
                } )

                done()
            })
    })
    test('getHeroByIdAsync should return an error if hero does not exist', ( done ) => {

        const id = 41;
        getHeroeByIdAsync( id )
            .catch( error => {

                console.log(error);
                expect( error ).toBe(`No se pudo encontrar el héroe ${id}`)
                done()
            })
    })
})