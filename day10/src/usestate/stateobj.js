import React, {useState} from 'react'

function Stateobj() {
    const fun={ username : "shainy", id : "101"}
   
    const[arr,setArr] = useState(fun)

    function set(){
        setArr(fun)
    }
    
    function change(){
            setArr({...arr, username:"riya", id:"102"})
    }
  return (
    <div>
        
        <h2>welcome. {arr.username} your id no is {arr.id}</h2>
        <button onClick={change}>click</button><br></br><br></br>
        <button onClick={set}>reset</button>
    </div>
  )
}

export default Stateobj