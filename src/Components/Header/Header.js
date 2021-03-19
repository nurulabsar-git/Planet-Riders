import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header-part">
            <nav>
            <Link to= "/home">Home</Link>
            </nav>
        </div>
    );
};

export default Header;