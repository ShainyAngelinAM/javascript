//props
import './App.css';
import Greety from './components/read';
import {Day} from './components/read';
import Write from './components/write';
import Date from './components/prompt';
import Msg from './components/msg';
function App() {
  return (
    <div className="App">
        <Greety/>
        <Day/>
        <Write/>
        <Date name="riya" id="101"><p>This is your information</p></ Date>
        <Date name="neha" id="102">This is your data</Date>     
        <Date name="riya" id="101"><p>This is your information</p></ Date>
        <Date name="renu" id="103"><button>GO</button></Date>
    <Msg/>
    </div>
  );
}

export default App;
