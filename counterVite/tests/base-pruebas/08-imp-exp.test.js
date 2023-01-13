import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

describe('testing 08-imp-exp', ()=> {
    
    test('getheroe by id should return a heroe by id', () =>{
        
        const id = 1;
        const heroe = getHeroeById( id );
        console.log(heroe);
    })
})