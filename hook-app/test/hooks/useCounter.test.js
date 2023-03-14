const { renderHook, render } = require("@testing-library/react")
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

})