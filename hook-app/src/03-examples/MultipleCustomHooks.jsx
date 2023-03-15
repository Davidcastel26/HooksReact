import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";


export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter( 1 )
  const { data, hasError,isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes`)
  const  { data:dataObj,  }  = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`)
  
  // console.log(name);
  // const {name, character} = gettingRickApi()
  // console.log({datas});
  // console.log({data, isLoadi0g, hasError})
  // esto se logra porque author tiene asignado un valor 
  // const { author, quote } = false 
  // const { name, species } = character;
  // const { name, species } = character;
  // console.log(name);
  // console.log(data, "BREAKING BAD");
  // console.log( dataObj?.name, "RandM" );
  
  if (isLoading) return <h1>Loading</h1>
  const { author, quote } = !!data && data[0];

  const { name, species } = dataObj

  // console.log(quote);
//  return null;
  return (
    <>
        <h1>Quotes</h1>  
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
