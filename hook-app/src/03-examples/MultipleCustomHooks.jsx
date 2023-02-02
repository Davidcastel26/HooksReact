import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

  // const { data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes`)
  const { data, isLoading, hasError} = useFetch(`https:/www.breakingbadapi.com/api/quotes/1`)

  const {} = useCounter()

  // console.log({data, isLoadi0g, hasError})
  // esto se logra poer que author tiene asignado un valor 
  // const { author, quote } = false 
  const { author, quote } = !!data && data[0];

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
              <blockquote className="blockquote text-end">
                <p className="mb-1"> { quote } </p>
                <footer className="blockquote-footer"> { author } </footer>
              </blockquote>
            )
        }

        <button className="btn btn-primary">
          Next Quote
        </button>

        

    </>
  )
}
