import React, {useState} from 'react';
import PropTypes from 'prop-types';


// FC
const CounterApp = ({value}) => {
    
    const [counter, setCounter] = useState(value);   
    
    //handleAdd
    const handleAdd = () => setCounter(counter + 1);
    const handleReset = () => setCounter(value);
    const handleResta = () => setCounter(counter - 1);
    
    return (
        
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleResta }>-1</button>
        </>
        
        );
}

CounterApp.prototype = {
    value: PropTypes.number,
}

export default CounterApp;

