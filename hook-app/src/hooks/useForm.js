import { useState } from "react";

export const useForm = () => {

    const infoForm = {
        username: '',
        email: '',
        password: ''
    }

    const [formState, setFormState] = useState(infoForm)

    const { username, email, password } = formState;

    const onInputChange = ( {target} ) => {
        // console.log(event.target.name);
        const { name, value} = target;
        setFormState({...formState, [ name ]: value})
    }

    return{

    }
}