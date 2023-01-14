import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('testing 09-promesas', () => {
    
    test('getHeroByIdAsync should return an hero', ()=> {

        const id = 1;
        getHeroeByIdAsync( id )
    })
})