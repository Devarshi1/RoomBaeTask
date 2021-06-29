import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="links">
                <div className="link-logo">Logo</div>
                <div className="link">Links</div>
                <div className="link-signup">SignUp</div>
            </div>
        </div>
    )
}

export default Navbar;