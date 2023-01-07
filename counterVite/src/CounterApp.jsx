import React from 'react'
import PropTypes from 'prop-types'

import { useState } from 'react'

export const CounterApp = ({ value }) => {

  const [ count, setCount ] = useState( value )

  const funtionForClick = (e) => {
    console.log('hey')
    // setCount( count + 1)
    setCount( (e)=> e + 1)
  }

  return (
    <>
      <h1> Counter App </h1>
      <h2> { count } </h2>
      <button onClick={ funtionForClick } > +1 </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}