import React from "react";
import { NavLink } from 'react-router-dom';

const SubNav = ()=>{
    return (
        <nav className="subnav">
            <ul>
                <li><NavLink to="/resume/education" id="education">Education</NavLink></li>
                <li><NavLink to="/resume/projects" id="projects">Projects</NavLink></li>
                <li><NavLink to="/resume/courses" id="courses">Courses</NavLink></li>
                <li><a href="https://drive.google.com/file/d/1J8hlS1UAEvNrF7P_8L7m4IKvJJj14Rv_/view?usp=sharing" target="_blank" rel="noreferrer" id="print">Resume</a></li>
            </ul>
        </nav>
    );
}

export default SubNav;