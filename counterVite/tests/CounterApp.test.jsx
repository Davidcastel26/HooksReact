import { fireEvent, render, screen } from "@testing-library/react";
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

    test('should incress with the btn +1', () => { 
        
        render( <CounterApp value={ initialValue } /> )
        //emulate the clikc fireEvent
        fireEvent.click( screen.getByText('+1'))

        expect( screen.getByText('101')).toBeTruthy()
     })

     test('should decress with the btn -1', () => { 
        
        render( <CounterApp value={ initialValue } /> )
        fireEvent.click( screen.getByText('-1'))

        expect(screen.getByText('99')).toBeTruthy()

      })
 })