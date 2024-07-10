import React, { useState } from 'react'
function First(){
    const [val,setValue]=useState("");
    const [res,setResult]=useState("");
     function Sum(e){
        e.preventDefault(); 
        setResult( 
            "Form has been submitted with Input: " +val
        ); 
     }
     function Change(e) { 
        setValue(e.target.value); 
        setResult(""); 
    } 

return(
    <div>
        <h1>hello</h1>
        
       
        <br>
        </br>
        <form onSubmit={Sum}> 
        <label>Add input here: </label> 
                <input 
                    value={val} 
                    onInput={Change} 
                    required 
                /> 
                <br>
        </br>
        <br>
        </br>
 <button type="submit">Submit</button> 
            </form> 
        <h4>{res}</h4>
    </div>
)
}
export default First;