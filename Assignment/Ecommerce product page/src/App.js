import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar'
import Shop from './components/shop'
import Cart from './components/cart'
import Confirm from './components/confirm'
import Order from './components/order'
import { Context } from "./components/context";

function App() {
    return <div className="App">
            <Context>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Shop/>}/>
                <Route path="/cart" element={<Cart/>}/> 
                <Route path="/confirm" element={<Confirm/>}/>    
                <Route path="/order" element={<Order/>}/>    
                    
            </Routes>
        </Router>
        </Context>
    </div>
}

export default App;
