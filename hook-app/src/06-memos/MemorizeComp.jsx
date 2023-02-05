import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small"

export const MemorizeComp = () => {

    const { counter, increment } = useCounter(10)

  return (
    <>
        <h1>Counter <Small value={counter}/> </h1>   
        <hr />
        <button className="btn btn-primary" onClick={ () => increment() }>
            +1
        </button>
    </>
  )
}
