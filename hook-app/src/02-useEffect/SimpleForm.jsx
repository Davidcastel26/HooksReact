import { useEffect, useState } from "react"
import Messege from "./Messege";

const infoForm = {
    username: 'strider',
    email: 'david@google.com'
}

export default function SimpleForm() {

    const [formState, setFormState] = useState(infoForm)

    const { username, email } = formState;

    const onInputChange = ( {target} ) => {
        // console.log(event.target.name);
        const { name, value} = target;
        setFormState({...formState, [ name ]: value})
    }

    useEffect( () => {
        console.log('useEffect!!');
    },[])

    useEffect( () => {
        // console.log('fomrState changed!!');
    },[formState])
    
    useEffect( () => {
        // console.log('email changed!!');
    },[ email ])

  return (
    <>
        <h1> SimpleForm </h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />
        <input 
            type="text"
            className="form-control mt-2"
            placeholder="david@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

        {
            (username === 'strider2') && <Messege />
        }
    </>
  )
}
