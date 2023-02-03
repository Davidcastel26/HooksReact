import { useEffect, useState } from "react"

const info = {
    data: null,
    isLoading: true,
    hasError: null,
    // character: null,
}

export const useFetch = ( url ) => {

    const [state, setState] = useState( info )

    const getFetch = async() => {

        setState({
            ...state,
            isLoading:true,
        })
        
        const resp = await fetch( url );
        const data = await resp.json()
        
        // console.log(character);
        // console.log(data);
        setState({
            data,
            isLoading: false,
            hasError: null
        })
    } 

    useEffect(() => {
    
        getFetch()

    }, [ url ])
    

    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}