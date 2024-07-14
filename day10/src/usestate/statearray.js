import React, { useState } from 'react'


function Statearray() {
    const initialArray = [
        { username: "shainy", id: "101" },
        { username: "Megha", id: "102" }
    ];
    const [arr, setArr] = useState(initialArray);

    function reset() {
        setArr(initialArray);
    }
    
    function addItem() {
        const newItem = { username: "riya", id: "103" };
        setArr([newItem]);
    }

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {arr.map((item, index) => (
                    <li key={index}>
                        Name : {item.username} ,  Id : {item.id}
                    </li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button><br/><br/>
            <button onClick={reset}>Reset</button>
        </div>
    );
}


export default Statearray