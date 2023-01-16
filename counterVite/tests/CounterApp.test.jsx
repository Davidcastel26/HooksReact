import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('we are testing < CounterApp/>', () => { 
    
    const initialValue = 100;

    test('should match with the snapshot', () => { 
        
        const { container } = render( <CounterApp value={initialValue} />)

        expect(container).toMatchSnapshot()

     })

    test('should show the initial value as 100', () => { 

        render( <CounterApp value={ initialValue }/> )
        expect( screen.getByText(initialValue)).toBeTruthy()

     })

 })