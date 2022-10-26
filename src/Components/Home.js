import React from "react";
import professional from '../styles/professional.jpg'

const Home = ()=>{
    return (
        <div className="home">
            <img src={professional} alt="Diego's profile" height={200} width={200} />
            <p>Name's Diego!</p>
            <h1>I love problem solving<br/>but you could also say I do coding</h1>
            <p>I am a software developer in the New York City area</p>
        </div>
    );
}

export default Home;