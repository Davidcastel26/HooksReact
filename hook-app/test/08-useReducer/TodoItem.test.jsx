import { render } from "@testing-library/react";
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
        
        render( <TodoItem todo={ todo } onToggleTodo={onToggleTodoMock} onDeleteTodo={ onDeleteTodoMock }/>)

    })

 })