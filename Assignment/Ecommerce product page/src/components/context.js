import React,{useState,createContext} from 'react'
import {PRODUCTS} from './products'
export const shopcontext=createContext(null)

const DefaultCart=() => {
    let cart={}
    for (let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0
    }
    return cart;
}

export const Context = (props) => {
    const [cartItems,setCartItems]=useState(DefaultCart())

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id ===Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }
    const addcart = (itemId) => {
        setCartItems((prev) => (
            {...prev , [itemId] : prev[itemId] + 1}))
    }
    const removecart = (itemId) => {
        setCartItems((prev) => (
            {...prev , [itemId] : prev[itemId] - 1}))
    };
    const updateCartItemCount=(newAmount,itemId) =>{
        setCartItems((prev) => ({...prev,[itemId]: newAmount}));
    }

    const contextValue={cartItems,addcart,removecart,updateCartItemCount,getTotalCartAmount};
    
    return <shopcontext.Provider value={contextValue}>{props.children}</shopcontext.Provider>
  
}
