import { useEffect, useState } from "react"

export default function Messege() {

    const [coords, setCoords] = useState( { x:0, y:0} )

    useEffect(() => {
        
        const onMouseMove = ( {x, y} ) =>{
            // const coords = { x, y}
            // console.log(coords);
            setCoords( { x, y})
        }

        window.addEventListener('mousemove', onMouseMove )
    
      return () => {
        window.removeEventListener('mousemove', onMouseMove)
      }
    }, [])
    

  return (
    <>
        <h3>Messege usuario existe</h3>
        { JSON.stringify( coords )}
    </>
  )
}
