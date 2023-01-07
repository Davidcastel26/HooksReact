import React from 'react'

// const newMessage = {
//   message: 'Hola mundo',
//   title: 'Fernando'
// }


export const FirstApp = () => {
  
  const something = (a , b) => {
    return a + b;
  }
  
  return (
    <>
      <h1> { something(1,2) } </h1>
      <p>Soy un subtitulo</p>
    </>
  )
}
