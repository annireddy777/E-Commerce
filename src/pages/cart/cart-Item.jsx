import React, { useContext } from 'react'
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems, removeFromCart, updateCartValue } = useContext(ShopContext);
    return (
        <div className='cartItem'><img src={productImage} />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
                <div className='counteHandler'>
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartValue(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </ div>
    )
}
