import { useState } from "react";

export const useForm = ( initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const { username, email, password } = formState;

    const onInputChange = ( {target} ) => {
        // console.log(event.target.name);
        const { name, value} = target;
        setFormState({...formState, [ name ]: value})
    }

    return{
        formState,
        onInputChange,
    }
}