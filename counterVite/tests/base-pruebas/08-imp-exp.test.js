import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('testing 08-imp-exp', ()=> {
    
    test('getheroe by id should return a heroe by id', () =>{
        
        const id = 1;
        const hero = getHeroeById( id );
        // console.log(heroe);

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getheroe by id should return undefined if does not exits', () =>{
        
        const id = 100;
        const hero = getHeroeById( id );
        // console.log(hero) //undefined

        expect(hero).toBeFalsy()
    })

    test('should return an array from DCs heroes',()=>{

        const owner = 'DC'
        const heroess = getHeroesByOwner( owner )
        console.log(heroess);

        expect( heroess.length ).toBe(3)
        expect(heroess).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
        expect( heroess ).toEqual( heroes.filter( (heroe) => heroe.owner === owner) )

    })

    test('should return Marvels heroes', () => {

        const owner = 'Marvel'
        const heroess = getHeroesByOwner( owner )
        console.log(heroess);

        expect(heroess.length).toBe(2)
        expect( heroess ).toEqual( heroes.filter( (heroe) => heroe.owner === owner))
    })
})