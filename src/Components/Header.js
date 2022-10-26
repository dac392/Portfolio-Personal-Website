import React from "react";
import { Link } from 'react-router-dom';

const Header = ()=>{
    return (
        <header>
            <strong className="h1-name"><Link to="/">[ Diego Castellanos ]</Link></strong>
            <nav className="main-nav">
                <ul>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;