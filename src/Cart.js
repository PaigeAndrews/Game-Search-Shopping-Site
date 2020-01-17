import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';



function Cart(){

    const homeLinkStyle = {
        color: 'red'
    };


    return (
        <div>
            <Link style={homeLinkStyle} to='/'>
                <h2> Home </h2>
            </Link>
            <h3 className="cartBox">Cart Box</h3>
        </div>
    );
}

export default Cart;