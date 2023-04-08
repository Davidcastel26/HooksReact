import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user} = useContext( UserContext )
  // console.log(hola);

  return (
    <>
    <div>LoginPage</div>
    <hr />
    <pre aria-label="pre">
      { JSON.stringify(user, null, 3)}
    </pre>
    </>
  )
}
