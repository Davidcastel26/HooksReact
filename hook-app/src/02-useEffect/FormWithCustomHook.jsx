import { useEffect, useState } from "react"

const infoForm = {
    username: '',
    email: '',
    password: ''
}

export const FomrWithCustomHook = () => {

    const [formState, setFormState] = useState(infoForm)

    const { username, email, password } = formState;

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
        <h1> Formulario con Custom Hook </h1>
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
            type="email"
            className="form-control mt-2"
            placeholder="david@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />
        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Password"
            name="password"
            value={ password }
            onChange={ onInputChange }
        />

    </>
  )
}
