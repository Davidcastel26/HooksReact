const { renderHook, act } = require("@testing-library/react")
const { useCounter } = require("../../src/hooks/useCounter")

describe('testing into useCounter', () => {

    test('should return the values by default', () => {

        const { result } = renderHook(() => useCounter());
        // console.log(result);
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10)
        expect(decrement).toEqual( expect.any(Function) )
        expect(increment).toEqual( expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
    })

    test('should return in the counter a value of 100', () => {

        const {result} = renderHook( () => useCounter(100))
        
        expect( result.current.counter).toBe(100)

    })
    
    test('should increas the value', () => {

        const { result } = renderHook( () => useCounter())
        const { counter, increment, reset } = result.current;

        act(()=>{
            increment();
            increment(2)
        })
        

        expect( result.current.counter ).toBe(13)

    })
    test('should decrement the value counter', () => {
        const { result } = renderHook( () => useCounter(10))
        const { counter, decrement, reset } = result.current;

        act( ()=>{
            decrement()
            decrement(2)
        })

        expect( result.current.counter).toBe(7)
    })

    test('should return reset value', () => { 
        
        const { result } = renderHook(() => useCounter(10))
        const { reset, decrement } = result.current;

        act(() =>{
            decrement();
            decrement();
            decrement();
            decrement();
            reset();
        })

        expect(result.current.counter).toBe(10)
     })

})