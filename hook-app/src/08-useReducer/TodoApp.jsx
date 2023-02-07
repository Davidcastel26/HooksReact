import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { FormTodo } from "./FormTodo"

const initialState = [
    
]

const init = () =>{
    return JSON.parse( localStorage.getItem('todos') ) || []
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState, init )

    useEffect(() => {
      
        // console.log(todos);
        localStorage.setItem('todos', JSON.stringify( todos ))
      
    }, [ todos ])
    

    const handleNewTodo = ( todo ) => {
        // console.log({todo})
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action )
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type:'[TODO] Toggle Todo'
        })
    }

    return (
        <>
            <h1>To Do App with Reducer (10), <small>pendings: 2</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    
                    <FormTodo onNewTodo={ handleNewTodo }/>
                    
                </div>
            </div>
        </>
    )
}