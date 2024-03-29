import { render, screen } from '@testing-library/react'
import { TodoApp } from '../../src/08-useReducer/TodoApp'
import { useTodo } from '../../src/hooks/useTodo'

jest.mock('../../src/hooks/useTodo')

describe('testing into <TodoApp/>', () => { 

    useTodo.mockReturnValue({
        todos:[
            {id: 1, description:'Todo #1', done: false},
            {id: 2, description:'Todo #2', done: true}
        ],
        pendingsTdos: 1,
        todosCounter: 2, 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn(), 
        handleNewTodo: jest.fn()
    })

    test('should show the component correctly', () => { 
        
        render( <TodoApp/> )
        // screen.debug();
        expect( screen.getByText('Todo #1')).toBeTruthy();
        expect( screen.getByText('Todo #2')).toBeTruthy();
        expect( screen.getByRole('textbox')).toBeTruthy();

        // console.log(screen.getByRole('textbox').name);
    })
 
})