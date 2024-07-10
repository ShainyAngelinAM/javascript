import React from 'react'

function ternary(props) {
    const myBool = props.myBool;
    return(
        <>
            {myBool ? "welcome home":"welcome school"
}
        </> 
    )
}


export default ternary