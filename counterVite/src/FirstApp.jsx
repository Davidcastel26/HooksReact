import React from 'react'

// const newMessage = {
//   message: 'Hola mundo',
//   title: 'Fernando'
// }
// utilizar variables fijate que no cambian afuera del componente para que no se ester recargando esa info

export const FirstApp = ({title = 'David'}) => {
  
  // const something = (a , b) => {
  //   return a + b;
  // }
  //Utilizar variables que son cambiantes dentro el componente
  
  return (
    <>
      {/* <h1> { something(1,2) } </h1> */}
      <h2>{ title }</h2>
      <p>Soy un subtitulo</p>
    </>
  )
}
