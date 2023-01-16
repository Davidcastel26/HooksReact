import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('testing component <FirstApp/>', () => { 
    
    test('should be the same as the snapshot', () => {

        const title = 'Hola, Soy Goku';
        // render( <FirstApp title={ title } /> )
        const { container } = render( <FirstApp title={ title } /> );
        
        expect( container ).toMatchSnapshot();
    })
})
        
    