import React,{useContext} from 'react'
import {shopcontext} from './context'
export const CartItem = (props) => {
    const {id,productName,price,productImage} = props.data;
    const {cartItems,addcart,removecart,updateCartItemCount} = useContext(shopcontext)
  return (
    <div className="cartitem">
        <img src={productImage}/>
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>Rs.{price}</p>
            <div className="countHandler">
                <button onClick={() => removecart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value),id)}/>
                <button onClick={() => addcart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}
