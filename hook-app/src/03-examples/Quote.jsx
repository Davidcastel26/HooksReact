import { useEffect, useLayoutEffect, useRef, useState } from "react"

const BoxSizes = {
  width:0,
  height: 0
}

export const Quote = ({author, quote, name, species}) => {

  const pRef = useRef()
  const RandMpRef = useRef()
  const [boxSize, setBoxSize] = useState(BoxSizes)

  useEffect(() => {
    // console.log(pRef.current.getBoundingClientRect());
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({height, width,})
  }, [])

  useLayoutEffect(() => {
    // console.log(RandMpRef.current.getBoundingClientRect());
    const {height:h, width:w} = RandMpRef.current.getBoundingClientRect()
    setBoxSize({ h, w})
  }, [])

  return (
    <div>

        <blockquote className="blockquote text-end" style={{ display: 'fex'}}>
            <p ref={pRef} className="mb-1"> { quote } </p>
            <footer className="blockquote-footer"> { author } </footer>
        </blockquote>
        <code>{JSON.stringify(boxSize)}</code>
        <hr />
        <blockquote className="blockquote text-center"  style={{ display: 'fex'}}>
            <p ref={RandMpRef} className="mb-1"> { name } </p>
            <footer className="blockquote-footer"> { species } </footer>
        </blockquote>
        <code>{JSON.stringify(boxSize)}</code>
    </div>
  )
}
