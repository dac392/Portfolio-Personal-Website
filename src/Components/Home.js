import React from "react";

const Home = ()=>{
    return (
        <div className="main-content">
            {/* <img src={professional} alt="Diego's profile" height={200} width={200} /> */}
            <p className="p-title">&gt; My Name is Diego!</p>
            <h1>I love building projects,<br/>but you could also say I do coding</h1>
            <p className="subtitle"><small>Software & Front-end Developer</small></p>
            <a href="https://www.linkedin.com/in/dac392/"  target="_blank" rel="noreferrer" className="a-button">connect with me</a>
        </div>
    );
}

export default Home;