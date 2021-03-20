import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header-part">
            <h1 style={{textAlign: 'center', margin:'8px'}}><i>PLANET RIDERS</i> </h1>
            <nav>
            <Link className="link" to= "/home">Home</Link>
            <Link className="link" to="">Destination</Link>
            <Link className="link" to ="">Contact</Link>

            </nav>
        </div>
    );
};

export default Header;