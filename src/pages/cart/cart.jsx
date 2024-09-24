import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-Item';
import "./cart.css"
import { useNavigate } from "react-router-dom"

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();
    return (
        <div className='cart'>
            <h1>Your Cart Items</h1>
            <div className='cart'>
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    };
                })}
            </div>
            {totalAmount > 0 ? (
                <div className='checkout'>
                    <p>Subtotal: ${totalAmount}</p>
                    <button onClick={() => navigate('/')}>Continue Shopping</button>
                    <button onClick={() => navigate('/Checkout')}>Checkout</button>

                </div>
            ) : (
                <h1>Add items to Cart</h1>
            )}
        </div>

    )
}
