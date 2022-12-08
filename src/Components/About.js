import React, { useState } from "react";
import Engineer from "./Engineer";
import Person from "./Person";

const About = ()=>{
    const [personal, setPersonal] = useState(true);
    const toggleTrue = ()=>{
        if(!personal){
            setPersonal(!personal);
        }
    }
    const toggleFalse = ()=>{
        if(personal){
            setPersonal(!personal);
        }
    }

    return(
    <div className="about">
        {
            (personal)?
            <img src={require("../Images/personal-pic.JPG")} alt="Diego with a cone on his head" /> :
            <img src={require("../Images/professional-pic.jpg")} alt="Diego looking semi professional" />
        }
        <h1>I am Diego</h1>
        <p>the...</p>
        <br/>
        <div className="inline">
            <button onClick={toggleTrue} className={(personal)? "btn selected":"btn"}>Person</button>
            <button onClick={toggleFalse} className={(!personal)? "btn selected":"btn"}>Developer</button>
        </div>
        {
            (personal)?
            <Person /> :
            <Engineer />
        }
    </div>
    );
}

export default About;