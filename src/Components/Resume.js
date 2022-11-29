import React from "react";
import { useOutlet} from 'react-router-dom';
import Education from "./Education";
import SubNav from "./SubNav";


const Resume = ()=>{
    const outlet = useOutlet();
    return (
        <div className="resume">
            <h1>My career thus far</h1>
            <SubNav />
            {outlet || <Education />}
            
        </div>
    );
}

export default Resume;