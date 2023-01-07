import React from 'react'

const newMessage = {
  message: 'Hola mundo',
  title: 'Fernando'
}

const something = () => {
  return 4+4;
}

export const FirstApp = () => {
  return (
    <>
      <h1> { something() } </h1>
      <p>Soy un subtitulo</p>
    </>
  )
}
