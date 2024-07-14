import React from 'react'
import {userName} from '../Cont'
import {idName} from '../Cont'
function Context3() {
  return (
    <div>
        <userName.Consumer>
          {
            user => {
              return <div> Username:  {user} </div>
            }
          }
        </userName.Consumer>
        <idName.Consumer>
        {
            id => {
              return <div> ID:  {id} </div>
            }
          }
        </idName.Consumer>
    </div>
  )
}

export default Context3