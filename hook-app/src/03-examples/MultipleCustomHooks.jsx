import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

  const {} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes`)

  return (
    <>
        <h1>Breaking Bad Quotes</h1>  
        <hr />

    </>
  )
}
