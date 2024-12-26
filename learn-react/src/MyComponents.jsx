import React, {useState} from 'react';


function MyComponent(){

    const [name, setName]= useState("Guest");
    const [age, setAge]= useState(0);
    const [isEmployed, setEmployed]= useState(false);

    const toggleisEmployed= () => {
        setEmployed(!isEmployed);
    }

    const incrementAge= () => {
        setAge(age + 7);
    }

    const updateName= () => {
        setName ("Naimul Hoque");
    }

    return( <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>
                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>
                <p>isEmployed: { isEmployed ? "YES": "NO"}</p>
                <button onClick={toggleisEmployed}>Toggle</button>
             </div>
    )
}
export default MyComponent 