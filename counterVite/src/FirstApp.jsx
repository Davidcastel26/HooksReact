import React from 'react'

// const newMessage = {
//   message: 'Hola mundo',
//   title: 'Fernando'
// }
// utilizar variables fijate que no cambian afuera del componente para que no se ester recargando esa info

import PropTypes from 'prop-types';

export const FirstApp = ({
  title,
  subTitle,
  name
  // subTitle = 'the end of the word' 
}) => {
  
  // const something = (a , b) => {
  //   return a + b;
  // }
  //Utilizar variables que son cambiantes dentro el componente
  // if (!title){
  //   throw new Error("the title does not exist")
  // }
  
  return (
    <>
      <h1>{title}</h1>
      {/* <h1> { something(1,2) } </h1> */}
      <h2>{ subTitle }</h2>
      {/* <p>Soy un subtitulo</p> */}
      <p>{ name }</p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

FirstApp.defaultProps = {
  title: 'There is no title',
  subTitle: 'There is no subtitle',
  name: 'David'
}