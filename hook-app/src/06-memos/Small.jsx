import { memo } from 'react'

                    // React.memo(( )=> {})
export const Small = memo(({ value }) => {

    console.log('soy yo otra vez :(');

  return (
    <small>{ value }</small>
  )
})
