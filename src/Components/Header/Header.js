import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header-part">
            <h1 style={{textAlign: 'center', margin:'8px'}}><i>PLANET RIDERS</i> </h1>
            <nav>
            <Link className="link" to= "/home">Home</Link>
            <Link className="link" to="/destination">Destination</Link>
            <Link className="link" to ="/blog">Blog</Link>
            <Link className="link" to ="/contact">Contact</Link>
            <Link className="link" to ="/detection">LogIn</Link>

            </nav>
        </div>
    );
};

export default Header;