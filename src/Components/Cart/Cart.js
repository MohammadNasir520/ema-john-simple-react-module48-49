import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart)
    let total = 0;
    for (const product of cart){
         total= total+product.price;
    }
    return (
        <div className='cart'>
            <h2> Order Summery</h2>
            <p>Selected cart: {cart.length}</p>
            <p>total price: ${total}</p>
            <p>Total Shipping :</p>
            <h5>Grand total:</h5>
        </div>
    );
};

export default Cart;