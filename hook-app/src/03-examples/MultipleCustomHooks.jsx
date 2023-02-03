import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

const gettingRickApi = async() => {
  const resp = await fetch(`https://rickandmortyapi.com/api/character/2 `)
  const character = await resp.json()
  const {name, species} = await character;
  // console.log(character);
  console.log(name);
};

gettingRickApi()
 
export const MultipleCustomHooks = () => {

  const { data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes`)
  
  // console.log(character);

  const {} = useCounter()

  // const {name, character} = gettingRickApi()
  // console.log({datas});
  // console.log({data, isLoadi0g, hasError})
  // esto se logra poer que author tiene asignado un valor 
  // const { author, quote } = false 
  // const { name, species } = character;

  // const { name, species } = character;
  // console.log(name);
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
              <div>

              <blockquote className="blockquote text-end">
                <p className="mb-1"> { quote } </p>
                <footer className="blockquote-footer"> { author } </footer>
              </blockquote>

              <blockquote className="blockquote text-end">
                {/* <p className="mb-1"> { name } </p> */}
                {/* <footer className="blockquote-footer"> { species } </footer> */}
              </blockquote>
              </div>
            )
        }

        <button className="btn btn-primary">
          Next Quote
        </button>

        

    </>
  )
}
