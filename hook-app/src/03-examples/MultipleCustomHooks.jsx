import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

 
export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter( 1 )
  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes`)
  const  { data:dataObj }  = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`)
  
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
        <h1>Breaking Bad Quotes</h1>  
        <hr />

        {
          (isLoading)
            ?(
              <div className="alert alert-info text-center">
                Loading...
              </div>
            )
            :(
              <div>

              <blockquote className="blockquote text-end">
                <p className="mb-1"> { quote } </p>
                <footer className="blockquote-footer"> { author } </footer>
              </blockquote>

              <blockquote className="blockquote text-end">
                <p className="mb-1"> { name } </p>
                <footer className="blockquote-footer"> { species } </footer>
              </blockquote>
              </div>
            )
        }

        <button className="btn btn-primary" onClick={ () => increment()}> 
          Next Quote
        </button>

        

    </>
  )
}
