import React from 'react';
import logo from '../../images/Logo.svg'
import'./Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="">Shop</a>
                <a href="">Order</a>
                <a href="">Inventory</a>
                <a href="">Home</a>
            </div>
        </nav>
    );
};

export default Header;