import React, {useState} from 'react'

function Stateobject() {

    const[name,setName]=useState({
        username:'',password:''
    })

    function submit(){
        alert('The username is  '   +name.username  +  ' and your password is '   +name.password);
    }
  return (
    <div>
        <form>
            Username <input type='text' value={name.username}
            onChange={e => setName ({ ...name, username: e.target.value})}/><br></br><br></br>
            Password <input type='text' value={name.password}
            onChange={e => setName ({ ...name, password: e.target.value})}/>
            <br></br>
            <br></br><button onClick={submit}>SUBMIT</button>
            <h2>welcome</h2>
            <h3>Your username is {name.username}</h3>
            <h3>Your password is {name.password}</h3>
            
        </form>
    </div>
  )
}

export default Stateobject