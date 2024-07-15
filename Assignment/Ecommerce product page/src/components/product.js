import React,{useContext} from 'react'
import {shopcontext} from './context'
function Product(props) {
    const {id,productName,price,productImage} = props.data;
    const {addcart} = useContext(shopcontext)
    
  return (
    <div className="product"> <img src={productImage} />
    <div className="description">
        <p>
            <b>{productName}</b>
        </p>
        
        <p>Rs.{price}</p>

    </div>
    
    <button className="add" onClick={() => addcart(id)}>
         Add to Cart </button>
    </div>
  )
}

export default Product

