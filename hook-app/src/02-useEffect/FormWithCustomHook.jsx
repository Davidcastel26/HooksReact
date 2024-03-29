import { useEffect } from "react"
import { useForm } from "../hooks/useForm"


const infoForm = {
    username: '',
    email: '',
    password: ''
}

export const FomrWithCustomHook = () => {

    // esto es gracias al useForm hooks que hicimos 'en el return lo destructuramos'
    const { formState, onInputChange, onResetForm, username, password, email } = useForm(infoForm)

    // const { username, email, password } = formState;

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

        <button onClick={ onResetForm } className="btn btn-primary mt-2"> Clean </button>
    </>
  )
}
