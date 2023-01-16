import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('testing component <FirstApp/>', () => { 

    const title = "Hola, Soy Goku";
    const subTitle = 'Soy un subTitle'

    test('should be match with the snapsho',() => {
        
        const { container } = render( <FirstApp title={ title } />)
        expect( container ).toMatchSnapshot();

    })

    test('it should show a message Hola, Soy Goku', () => {
        
        render( <FirstApp title={title} />);
        //screen.debug
        expect( screen.getByText(title) ).toBeTruthy()

    })

    test('should show the title into h1', () => { 
        
        render( <FirstApp title={title} />);
        expect( screen.getByRole('heading', { level: 1}).innerHTML ).toContain( title )

     })

    test('should show the subtitle sent by props', () => { 
        
        render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            />  
        );

        expect( screen.getAllByText(subTitle).length ).toBe(1);

     })
})
        
    