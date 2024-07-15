import {React} from 'react'
import {Link} from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';
 const Navbar = () => {
  return (
    <div className="navbar">
        <div className="links">
        <Link to="/"> <h3>SHOP  </h3> </Link> 
        <Link to="/cart" >  
        <ShoppingCart size={50}/>
        </Link>
        </div>
    </div>
  )
}

export default Navbar;
