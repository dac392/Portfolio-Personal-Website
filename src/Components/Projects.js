import React from "react";

const Projects = ()=>{
    return (
        <div className="module">
            <article className="timeline">
                <section>
                    <p><small>Nov 18, 2022</small></p>
                    <h3>BuyMe</h3>
                    <p>A data base management system used for maintaining an auction website akin to ebay.</p>
                    <p>Built in Java and makes use of a MySQL db and a jsp front end to function.</p>
                </section>
                <section>
                    <p><small>Sep 14, 2022</small></p>
                    <h3>Course Browser</h3>
                    <p>Full-stack website allowing users to view courses made by any registered user. Authenticated users are also allowed to post and edit the course information which they themselves post.</p>
                    <p><small>SQL, Sequelize, REACT, JavaScript</small></p>
                    <a href="https://github.com/dac392/Client-Api-Treehouse-Fullstack" target="_blank" rel="noreferrer">View repository</a>
                </section>
                <section>
                    <p><small>Apr 18, 2022</small></p>
                    <h3>Simple Compiler</h3>
                    <p>Developed a compiler for a simple made up language using context free grammar. The program takes code and compiles it into ILOC assembly code.</p>
                    <a href="https://github.com/dac392/SimpleCompiler-Compilers-C" target="_blank" rel="noreferrer">View repository </a>
                </section>
                <section>
                    <p><small>Feb 21, 2022</small></p>
                    <h3>Song Library</h3>
                    <p>Deployed a small software application to manage song information. It is built using javaFX as my introduction to developing software and software methodology.</p>
                    <a href="https://github.com/dac392/songLibrary-software-javafx" target="_blank" rel="noreferrer">View repository </a>
                </section>
                <section>
                    <p><small>Jan 21, 2022</small></p>
                    <h3>Protfolio Node static site</h3>
                    <p>Built a rudimentary portfolio site using node and express</p>
                    <a href="https://github.com/dac392/expressStaticSite-treehouse-nodeJS" target="_blank" rel="noreferrer">View repository </a>
                </section>
            </article>
        </div>
    );
}

export default Projects;