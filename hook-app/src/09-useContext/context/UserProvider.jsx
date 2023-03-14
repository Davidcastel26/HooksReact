import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id:123,
//     name: 'dave',
//     mail:'david@mail.com'
// }

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState()

  return (
    // <UserContext.Provider value={{ hola:'Mundo', user}}>
    <UserContext.Provider value={{ user }}>
        { children }
    </UserContext.Provider>
  )
}
