import { TodoList } from "./TodoList"
import { FormTodo } from "./FormTodo"
import { useTodo } from "../hooks/useTodo"


export const TodoApp = () => {

    const { todos, 
            pendingsTdos,
            todosCounter, 
            handleDeleteTodo, 
            handleToggleTodo, 
            handleNewTodo } = useTodo()

    return (
        <>
            <h1>
                To Do App with Reducer { todosCounter }, 
                <small>
                    pendings: { pendingsTdos }
                </small> 
            </h1>

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