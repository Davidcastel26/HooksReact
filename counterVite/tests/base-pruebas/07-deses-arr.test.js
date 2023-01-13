import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('testing 07-deses-arr', ()=> {
    
    test('should return a string and a number', ()=> {
        
        const [ letters, numbers] = retornaArreglo()
        // console.log(returnx);
        expect( letters ).toBe( "ABC" )
        expect( numbers ).toBe( 123 )

        expect( typeof letters ).toBe('string')
        expect( typeof numbers).toBe('number')

        expect( letters ).toEqual( expect.any(String))
    })
})