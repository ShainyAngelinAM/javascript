import React, {useState , useEffect} from 'react'

function Effect() {
    const[con,setCon]=useState(0)
    const[name,setName]=useState('')

    useEffect(() => {
      console.log(name)
        document.title= `you clicked ${con} times`
        })
  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
        <br></br><br></br><button onClick={() => setCon(con+5 )}>Click {con} times</button>
    </div>
  )
}

export default Effect