import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user, setUser} = useContext( UserContext )
  // console.log(hola);

  return (
    <>
    <div>LoginPage</div>
    <hr />
    <pre aria-label="pre">
      { JSON.stringify(user, null, 3)}
    </pre>

    <button className="btn btn-primary" onClick={() => setUser({id:123, name:'Juan', email:'juan@google.com'})}>
      Establecer Usuario
    </button>

    </>
  )
}
