
describe('Prebas en <DemoComponent />', ()=> {
    
    test('Esta prueba no puede fallar', () =>{
        // if (1 == 0 ){
        //     throw new Error('No puedes dividir entre cero')
        // }
    
        // 1. inicializacion
        const message1 = "Hola mundo"
    
        //2. estimulo 
        const message2 = message1.trim()
    
        // 3. observar el comportamiento... esperado
        expect( message1 ).toBe( message2 )
    
    })
})