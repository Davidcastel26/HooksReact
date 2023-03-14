const { renderHook } = require("@testing-library/react")
const { useCounter } = require("../../src/hooks/useCounter")

describe('testing into useCounter', () => {

    test('should return the values by default', () => {

        const { result } = renderHook(() => useCounter());
        console.log(result);
    })

})