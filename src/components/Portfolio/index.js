import React from "react";
import Project from "../Project";

function Portfolio(){
    const projects = [
        {
            title: "Spelling-Bee",
            description: "This game was created to test your spelling skills. Set a high score by correctly spelling as many words as you can.",
            url: "https://chriskurz098.github.io/Spelling-Bee/"
        },
        {
            title: "Learn It",
            description: "An interactive educational forum for exploring web development languages!",
            url: "https://damp-journey-96412.herokuapp.com/"
        },
        {
            title: "BeatHub",
            description: "Coming soon!",
            url: "https://blooming-tundra-89879.herokuapp.com/"
        }
    ]

    return (
    <section>
        <h1>Portfolio</h1>
        <Project projects={projects} />
    </section>
    )
}

export default Portfolio;