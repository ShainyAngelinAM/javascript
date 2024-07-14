import React, {useEffect,useRef} from 'react'

function Ref() {
  const inref=useRef(null)

  useEffect(() => {
    inref.current.focus()
  })
  return (
    <div>      
        Name : <input ref={inref} type="text"/>
    </div>
  )
}

export default Ref