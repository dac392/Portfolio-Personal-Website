import React from "react";
import { NavLink } from 'react-router-dom';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md"

const MainNav = ({status, setVisible})=>{
    const hanleClick = ()=> setVisible(false);
    return (
        <ul id="primary-navigation" data-visible={status}>
            <li><NavLink 
                exact to="/"
                className={(navData) => (navData.isActive? 'active':'')}
                onClick={hanleClick}
                ><strong>Diego</strong></NavLink></li>
            <li><NavLink 
                to="/resume" activeClassName="active"
                className={(navData) => (navData.isActive? 'active':'')}
                onClick={hanleClick}
                >Resume</NavLink></li>
            <li><NavLink 
                to="/about"
                className={(navData) => (navData.isActive? 'active':'')}
                onClick={hanleClick}
                >About Me</NavLink></li>
            <li><address><a href="mailto:dac392@gmail.com"><MdEmail /> dac392@rutgers.edu</a></address></li>
            <li><a href="https://github.com/dac392" target="_blank" rel="noreferrer"><FaGithubSquare /> GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/dac392/" target="_blank" rel="noreferrer"><FaLinkedin /> NavLinkedin</a></li>
        </ul>
    );
}

export default MainNav;