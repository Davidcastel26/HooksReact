import { useEffect, useState } from "react"

const info = {
    data: null,
    isLoading: true,
    hasError: null,
    // species: null,
    // name: null,
    character: null
}

export const useFetch = ( url ) => {

    const [state, setState] = useState( info )

    const getFetch = async() => {

        setState({
            ...state,
            isLoading:true,
        })
        
        const resp = await fetch( url );
        const json = await resp.json()

       setState({
        ...state,
        data: json,
        isLoading:false,
       })
    } 

    useEffect(() => {
    
        getFetch();
        // gettingRickApi();

    }, [ url ])
    

    return{
        data: state.data,
        // data: 'holi',
        isLoading: state.isLoading,
        hasError: state.hasError,
        // name: state.name,
        // species: state.species,
        // character: state.character,
    };
}