import React from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {

  const funtionForClick = (e) => {
    console.log('hey')
  }

  return (
    <>
      <h1> Counter App </h1>
      <h2> { value } </h2>
      <button onClick={ funtionForClick } > +1 </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}