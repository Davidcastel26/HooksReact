import { useState } from "react"

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
    </>
  )
}
