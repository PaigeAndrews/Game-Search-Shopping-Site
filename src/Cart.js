import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';



function Cart(){

    

    return (
        <div className="containerCart">
        
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className="homeLink"> Home </div>
            </Link>
            
        
        </div> 
    );
}

export default Cart;