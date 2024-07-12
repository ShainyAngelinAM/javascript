
import React from 'react'

function Login() {

    function sub(){
      
        alert('The form is submitted')
    }
  return (
    <div>
        <form>
            Username: <input type="text" ></input><br></br><br></br>
            Password: <input type="text" ></input><br></br><br></br>
            <button onClick={sub}>SUBMIT</button>
        </form>
    </div>
  )
}

export default Login