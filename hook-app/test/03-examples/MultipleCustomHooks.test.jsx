import { render, renderHook, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"

describe('testing in <MultipleCustomHooks/>', () => { 

    test('should show the component by default', () => { 
        
        render(<MultipleCustomHooks />)

        // expect( screen.getByText('Loading'))
        // expect( screen.get('Quotes'))

        // const nextBtn = screen.getByRole('button',{ name:'Next Quote'})
        // console.log(nextBtn.disabled);
        // expect( nextBtn.disabled).toBeTruthy()

        // screen.debug()

    })

 })