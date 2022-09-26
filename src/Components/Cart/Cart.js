import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div>
            <h2> Order Summery</h2>
            <p>Selected cart: {cart.length}</p>
        </div>
    );
};

export default Cart;