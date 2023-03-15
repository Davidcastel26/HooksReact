import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('testing useForm', () => {

    const initialForm = {
        name:'Dave',
        email:'dave@gmail.com'
    }

    test('should return the values be default', () => {

        const { result } = renderHook( () => useForm(initialForm))
        // const {  } = result.current
        // console.log(result.current);

        expect(result.current).toEqual({
            name: initialForm.name,
            email:initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        })
    })

    test('should change the form name', () => {
        
        const newValue = 'Juan';
        
        //mount hook
        const {result} = renderHook(() => useForm(initialForm))
        const { onInputChange } = result.current
        //onInputChange()  act, event... 

        act(() => {
            onInputChange({target: {name:'name', value: newValue}})
        })

        expect(result.current.name).toBe( newValue)
        expect( result.current.formState.name).toBe(newValue)
    })

    test('should reset from the Form', () => {

        const newValue = 'Juan';
        const {result} = renderHook( () => useForm())
        const {onInputChange, onResetForm} = result.current

        act(()=>{
            onInputChange({target: {name:'name', value: newValue}})
            onResetForm()
        })
        // console.log(initialForm.name, newValue)

        expect(result.current.name).toBe(initialForm.name)
        // expect(result.current.name).toBe( initialForm.name );
        expect(result.current.formState.name).toBe(initialForm.name)

    })

})