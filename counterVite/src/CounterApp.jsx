import React from 'react'
import PropTypes from 'prop-types'

import { useState } from 'react'

export const CounterApp = ({ value }) => {

  const [ count, setCount ] = useState( value )

  const Suma = (e) => {
    console.log('hey')
    // setCount( count + 1)
    setCount( (e)=> e + 1)
  }

  const Resta = () => {
    setCount( (e) => e - 1 )
  }
  const Reset = () => setCount(value)

  return (
    <>
      <h1> Counter App </h1>
      <h2> { count } </h2>
      <button onClick={ Suma } > +1 </button>
      <button onClick={ Resta }> -1 </button>
      <button aria-label='btn-reset' onClick={ Reset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}