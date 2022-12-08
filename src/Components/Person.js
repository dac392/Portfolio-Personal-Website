import React from "react";

const Person = ()=>{
    return (
    
        <article className="summary">
            <section className="description">
                <h3>Hello,</h3>
                <p>I am quite flattered and appreciate you for wanting to learn more about myself. As someone who is passionate about their field of study, one of my comfort activities is to work on a new personal project where I can put my programming skills to good use. In my personal life, I am dedicated to making meaningful memories while also continuing to develop my skills along the way.</p>
                <p>In my free time, I enjoy learning, creating, and traveling. As a result,  I can always be found either in the library, the kitchen, or visiting a new place. Lately, I have been dedicating myself to finding and perfecting new recipes to impress my family and friends. </p>
                <p>As a naturally inquisitive person, I enjoy mixing up my daily routine and working on my different hobbies. I have found that working on different projects will often keep me engaged and excited, thus,  I make it a point to not overexert and burn my self on a singular project. Instead, I will take a break from one project by working on a different one.</p>
            </section>
            <div className="container">
                <section>
                    <h4>Hobbies</h4>
                    <ul>
                        <li>Cooking</li>
                        <li>Working Out</li>
                        <li>Traveling</li>
                        <li>Learning</li>
                    </ul>
                </section>
                <section>
                    <h4>Details</h4>
                    <ul>
                        <li>Born in El Salvador</li>
                        <li>Fluent in English and Spanish</li>
                        <li>Learning Japanese</li>
                        <li>Hopes to learn Gernams some day</li>
                    </ul>
                </section>
            </div>
        </article>
        
    );
}

export default Person;