import { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { FormTodo } from "./FormTodo"

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recoletar la piedra del Alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recoletar la piedra del Mente',
        done: false,
    },
]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState )

    const handleNewTodo = ( todo ) => {
        // console.log({todo})
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action )
    }

    return (
        <>
            <h1>To Do App with Reducer (10), <small>pendings: 2</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos}/>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    
                    <FormTodo onNewTodo={ handleNewTodo  }/>
                    
                </div>
            </div>
        </>
    )
}