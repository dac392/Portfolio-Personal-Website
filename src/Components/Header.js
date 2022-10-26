import React from "react";
import { NavLink } from 'react-router-dom';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md"

const Header = ()=>{
    return (
        <header>
            <nav className="main-nav">
                <ul>
                    <li><NavLink 
                        exact to="/welcome"
                        className={(navData) => (navData.isActive? 'active':'')}
                        ><strong>Diego</strong></NavLink></li>
                    <li><NavLink 
                        to="/resume" activeClassName="active"
                        className={(navData) => (navData.isActive? 'active':'')}
                        >Resume</NavLink></li>
                    <li><NavLink 
                        to="/about"
                        className={(navData) => (navData.isActive? 'active':'')}
                        >About Me</NavLink></li>
                    <li><address><a href="mailto:dac392@gmail.com"><MdEmail /> dac392@rutgers.edu</a></address></li>
                    <li><a href="https://github.com/dac392" target="_blank" rel="noreferrer"><FaGithubSquare /> GitHub</a></li>
                    <li><a href="https://www.NavLinkedin.com/feed/" target="_blank" rel="noreferrer"><FaLinkedin /> NavLinkedin</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;