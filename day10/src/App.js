
import './App.css';
import State from './usestate/state'
import Stateset from './usestate/setstate'
import Object from './usestate/stateobject'
import Obj from './usestate/stateobj'
import Array from './usestate/statearray'
function App() {
  return (
    <div className="App">
      <State/><br></br>
      <Stateset/><br></br>
      <Object/>
      <Obj/>
      <Array/>
    </div>
  );
}

export default App;
