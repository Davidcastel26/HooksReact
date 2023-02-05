import { useCounter, useFetch } from "../hooks";
import { LoadingQuote,Quote } from "../03-examples";

export const Layout = () => {

  const { counter, increment } = useCounter( 1 )
  const { data, hasError,isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes`)
  const  { data:dataObj,  }  = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)
  
  if (isLoading) return <h1>Loading</h1>

  const { author, quote } = !!data && data[0];
  const { name, species } = dataObj

  return (
    <>
        <h1>Breaking Bad Quotes</h1>  
        <hr />

        {
          (isLoading)
            ? <LoadingQuote isLoading={isLoading} />
            : <Quote author={author} quote={quote} name={name} species={species} />
        }

        <button className="btn btn-primary" disabled={ isLoading } onClick={ () => increment()}> 
          Next Quote
        </button>

    </>
  )
}
