import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('test into <TodoItem>', () => { 

    const todo = {
        id:1,
        description: 'Piedra del Alma',
        done: false
    };
    
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks())

    test('should show the pendding to do', () => { 
        
        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={ onDeleteTodoMock }
            />
        );

        const liElement = screen.getByRole('listitem')

        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')

        expect( spanElement.className ).toContain('align-self-center')
        expect( spanElement.className ).not.toContain('text-decoration-line-through')

    })

    test('should show the To do Completed', () => { 
        
        todo.done = true;

        render(
            <TodoItem 
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        )

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through')

    })

    test('span should call toggle to do', () => { 
        
        render(
            <TodoItem 
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        )

        const spanElement = screen.getByLabelText('span')
        fireEvent.click( spanElement )

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )

    })

    test('span should call delete to do', () => { 
        
        render(
            <TodoItem 
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        )

        const deleteButton = screen.getByRole('button')
        fireEvent.click( deleteButton )

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id )

    })

 })