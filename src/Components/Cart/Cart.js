import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let total= 0;
    for(const person of cart){
        total= total + person.hireCost;
    }
    return (
        <div>
            <h2>Hired List</h2>
            <h4>Number of DJ: {props.cart.length}</h4>
            <p>Total: ${total}</p>
        </div>
    );
};

export default Cart;