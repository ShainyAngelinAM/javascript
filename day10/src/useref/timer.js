import React, {useState,useEffect,useRef} from 'react'

function Timer() {
    const [time,setTime]=useState(0)
    const intervalRef=useRef()

    useEffect(() =>{
         intervalRef.current=setInterval(() => {
            setTime(prevTimer => prevTimer+1)
        },1000)
        return() => {
            clearInterval (intervalRef.current)
        }
    })
  return (
    <div>
        Hook timer - {time}
        <br></br><br></br>
        <button onClick={( )=> clearInterval (intervalRef.current)}>Clear</button>
    </div>
  )
}

export default Timer