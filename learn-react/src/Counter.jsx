import React, {useState} from 'react';
import './index.css';



function Counter(){

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1);
       
    }

    const decrementCount = () => {

        if(count>0){
            setCount(count-1);
        }
       
    }

    const resetCount= () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
             <p className="displayCount"> Count: {count}</p>
             <button className="counterButton" onClick = {decrementCount}> Decrement </button>
             <button className="counterButton" onClick = {resetCount}> Reset </button>
             <button className="counterButton" onClick = {incrementCount}> Increment </button>
        </div>
       
    );

}

export default Counter