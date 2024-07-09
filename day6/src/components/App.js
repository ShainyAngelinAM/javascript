import Heady from "./components/header";
import Ex from "./components/example";
import {Txt} from "./components/file";
import {Txt1} from "./components/file";
import File from "./components/file";
function App() {

  const list=(
    <ul>
    <h3><li>one</li></h3>
    <li>two</li>
    </ul>
  )

   const name="shainy";
   const rno=101;
  const id=(
    <div>
    <h4>The name is : {name}</h4>
    <h4>The roll number is : {rno}</h4>
    </div>
  )
  
  return (
    <div>
      <Heady/>
      {Txt}
      {list}
      {id}
      <File/>
            <Ex/>
            {Txt1}
    </div>
  );
}



export default App;
