import React , {useContext} from 'react'
import {userName} from '../Cont'
import {idName} from '../Cont'
function Context2() {

  const un=useContext(userName)
  const idn=useContext(idName)
  return (
    <div>
      {`${un} and ${idn}`}
    </div>
  )
}

export default Context2