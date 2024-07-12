
import React from 'react'


function signup() {
    function sub(){
        alert('The form is submitted')
    }
  return (
    <div>
        <form>
            Username: <input type="text" ></input><br></br><br></br>
            Email: <input type="text" ></input><br></br><br></br>
            DOB: <input type="text" ></input><br></br><br></br>
            Password: <input type="text" ></input><br></br><br></br>
            <button onClick={sub}>SUBMIT</button>
        </form>
    </div>
  )
}

export default signup