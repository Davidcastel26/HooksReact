import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './ProjectApp'

import './styles.css'
import { CounterApp } from './CounterApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={32}/>
    </React.StrictMode>
)