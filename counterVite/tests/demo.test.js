
test('Esta prueba no puede fallar', () =>{
    if (1 == 0 ){
        throw new Error('No puedes dividir entre cero')
    }
})