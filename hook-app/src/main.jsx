import React from 'react'
import ReactDOM from 'react-dom/client'
// import HooksApp from './HooksApp'

import './index.css'
// import CounterApp from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import SimpleForm from './02-useEffect/SimpleForm'
// import { FomrWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { MemorizeComp } from './06-memos/MemorizeComp'
import { MemoHook } from './06-memos/MemoHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MemoHook />
  // </React.StrictMode>,
)
