import { useForm } from "../hooks/useForm"

export const FormTodo = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description:'',
    })

    const onFormSubmit = e =>{
        e.preventDefault();

        if( description.length <= 1 ) return;

        const newTodo= {
            id: new Date().getTime(),
            done: false,
            description: description
        }

        onNewTodo(newTodo)
        onResetForm();
    }

 return (
    <form onSubmit={ onFormSubmit }>

        <input 
            type="text" 
            placeholder="What's going to do?" 
            className="form-control" 
            name="description"
            value={ description }
            onChange={ onInputChange }
        />

        <button className="btn btn-outline-secondary mt-2" type="submit">
            Add
        </button>

    </form>
 )

}