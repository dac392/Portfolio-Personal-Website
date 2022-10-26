import React from "react";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md"

const Footer = ()=>{
    return (
        <footer>
            <nav>
                <ul>
                    <li><address><a href="mailto:dac392@gmail.com"><MdEmail /> dac392@rutgers.edu</a></address></li>
                    <li><a href="https://github.com/dac392" target="_blank" rel="noreferrer"><FaGithubSquare /> GitHub</a></li>
                    <li><a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><FaLinkedin /> Linkedin</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;