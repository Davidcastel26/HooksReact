import { render, screen } from '@testing-library/react'
import { HomePage } from '../../src/09-useContext/HomePage'
import { UserContext } from '../../src/09-useContext/context/UserContext'

describe('testing into <HomePage/>', () => { 
    
    

    test('should show the component with out user', () => { 
      
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')

        // screen.debug()

    })

}) 