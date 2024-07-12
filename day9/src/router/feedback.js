import React from 'react'

function Feedback() {
    function fill(){
        alert('Feedback submitted')
    }

  return (
    <div>
        <h4>PLEASE ENTER YOUR FEEDBACK</h4><br></br>
        Message: <input type="text"></input><br></br><br></br>
        <button onClick={fill}>SUBMIT</button>
    </div>
  )
}

export default Feedback