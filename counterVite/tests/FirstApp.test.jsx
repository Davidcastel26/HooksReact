import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('testing component <FirstApp/>', () => { 

    test('Title should show into h1', ()=>{
        const title = 'Hola, Soy Goku';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );

        //should be the same as the snapshot
        // expect( container ).toMatchSnapshot();

        //making sure in the snap exist the title
        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1')
        // console.log(h1.innerHTML) check if we are retriving the correct h1
        expect(h1.innerHTML).toContain( title )

        //checking if exist
        // expect( getByTestId('test-title').innerHTML).toBeTruthy() 
        expect( getByTestId('test-title').innerHTML).toContain( title )

    })

    test('should show the subtitle send by props',()=>{
        const title = 'Hola, Soy Goku';
        const subTitle = 'Soy el subTitulo';
        const { getAllByText } = render( <FirstApp title={ title } subTitle={ subTitle } /> );

        // expect( getByText(subTitle)).toBeTruthy()
        expect( getAllByText(subTitle).length).toBe(1)
    })
})
        
    