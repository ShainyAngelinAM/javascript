import React, {useState} from 'react'

function Setstate() {
    const incount=1
    const[count,setCount]=useState (incount) 

    function divide(){
        setCount(count/2)
    }
    return (
    <div>count:{count}<br></br> <br></br>
        <button onClick={() => setCount(incount)}>Reset</button>
        <br></br>
        <br></br><button onClick={() => setCount(count+1)}>Increment</button>
        <br></br>
        <br></br><button onClick={() => setCount(count-1)}>Decrement</button>
        <br></br>
        <br></br><button onClick={() => setCount(count*6)}>Multiply</button>
        <br></br>
        <br></br><button onClick={divide}>Divide</button>
        
    </div>
  )
}

export default Setstate