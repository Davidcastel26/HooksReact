import { render, screen } from '@testing-library/react'
import { HomePage } from '../../src/09-useContext/HomePage'
import { UserContext } from '../../src/09-useContext/context/UserContext'

describe('testing into <HomePage/>', () => { 
    
    const user = {
        id: 1,
        name: 'Dave'
    }

    test('should show the component with out user', () => { 
      
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        // console.log(preTag.innerHTML);
        expect( preTag.innerHTML ).toBe('null')
        // screen.debug()

    })

    test('should show the component with User', () => { 

        render(
            <UserContext.Provider value={{user}}>
                <HomePage/>
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')

        expect( preTag.innerHTML ).toContain( user.name )
        expect( preTag.innerHTML ).toContain( user.id.toString() )

    })

}) 