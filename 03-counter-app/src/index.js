import React from 'react';
import ReactDOM from 'react-dom/client';

//CSS
import './index.css'


//COMPONETES
import CounterApp from './CounterApp'

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<CounterApp value = {11} />);