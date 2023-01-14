import { string } from "prop-types";
import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('testing 11-async-await', () => {

    test('getImagen debe retornar un URL de la imagen', async()=>{

        const url = await getImagen();
        console.log( url );

        expect( typeof url ).toBe( "string" )

    })

    test('getImagen should return an error if there is no api key', async()=> {

        const resp = await getImagen();
        expect( resp ).toBe('No se encontro la imagen')
    })
})