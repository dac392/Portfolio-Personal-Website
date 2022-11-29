import React from "react";
import { NavLink } from 'react-router-dom';

const SubNav = ()=>{
    return (
        <nav className="subnav">
            <ul>
                <li><NavLink to="/resume/education" id="education">Education</NavLink></li>
                <li><NavLink to="/resume/projects" id="projects">Projects</NavLink></li>
                <li><NavLink to="/resume/courses" id="courses">Courses</NavLink></li>
            </ul>
        </nav>
    );
}

export default SubNav;