//state

import React, { Component } from 'react'

export class msg extends Component {
    constructor(){
        super()
            this.state={
                message:'hello mam'
            };    
    }
    changeMessage(){
      this.setState({
        message:'Hello student'
      })
    }
  render() {
    return (
      <div> 
         <h1>{this.state.message}</h1>
         <button onClick={()=> this.changeMessage()}>SUBMIT</button>
      </div>
      
    )
  }
}

export default msg;


