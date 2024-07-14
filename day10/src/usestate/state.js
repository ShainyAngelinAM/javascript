import React, {useState} from 'react'

function State() {
   const[count,setCount]= useState(0)
  return (
    <div>
        click here <button onClick = {() => setCount(count +10)} >count {count} </button>
    </div>
  )
}

export default State