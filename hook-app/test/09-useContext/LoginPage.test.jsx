import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { LoginPage } from "../../src/09-useContext/LoginPage"

describe('testing into <LoginPage/>', () => { 
    
    test('should show the component with out users', () => { 
        
        render(
            <UserContext.Provider value={{ user: null}}>
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');

        expect( preTag.innerHTML ).toBe('null')

    })

    test('should call the setUser when click in the btn ', () => { 
        
        const setUserMock = jest.fn()

        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const btn = screen.getByRole('button');
        fireEvent.click(btn)

        expect( setUserMock ).toHaveBeenCalledWith()

    })
 })