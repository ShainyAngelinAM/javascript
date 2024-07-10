import Reactj from 'react'

function Event(){
    function cut(){
        alert("content deleted")
    }
    function copy(){
        alert("content copied")
    }
    function paste(){
        alert("content pasted")
    }
        const [val,setValue]=useState("");
     function change(e){
        setValue(e.target.value);
     }
     

return (
    <div>
        <h1>Welcome</h1>
        Enter the details <input  onCut={cut} onCopy={copy} onPaste={paste}/>
        <br /><br />
       
        
        Type here <input value={val} onInput={change}/>
        <br /><br />
            <div style={{color:'blue'}}>User Input:- {val}</div>
    </div>
);
}
export default Event;