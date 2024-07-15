import React,{useContext} from 'react'

import {PRODUCTS} from './products'
import {shopcontext} from './context'
import {CartItem} from './cartitem'

import './cart.css'
import {Link ,useNavigate} from 'react-router-dom'
function Cart() {
  const {cartItems,getTotalCartAmount,checkout} = useContext(shopcontext)
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/confirm');
  };
  const handleorder = () => {
    navigate('/order');
  };
  return ( 
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !==0){
            return <CartItem data={product} key={product.id}/>
          }
        })}
      </div>
      {totalAmount > 0 ?
      <div className="checkout">
        <p>SUBTOTAL : Rs.{totalAmount}</p>
        <button onClick={handleorder}> Confirm order </button>
        <button onClick={handleClick}>checkout</button><br></br><br></br>
        <Link to="/" >Continue Shopping</Link>
        <br></br><br></br>
      </div>
     : <h1> Your Cart is Empty</h1> }
    </div>
  )
}

export default Cart