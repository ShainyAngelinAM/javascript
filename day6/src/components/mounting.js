import React, { Component } from 'react'

export class mounting extends Component {
    constructor(props){ //method is called when the component is first created
        super(props)
        this.state={
            name:"shainy"
        }
        console.log('mounting constructor')
        
    }
    componentDidMount(){ //after mounted to dom
        console.log('first')
    }
    render() {//insert to dom
        console.log('phase rendering')
        return (
          <div>
            <h1>Mounting phase</h1>
          </div>
        )
      }
    static getDerivedStateFromProps(props,state){//update the component
        console.log('mounting');
        return null;
    }

    
  
}

export default mounting;